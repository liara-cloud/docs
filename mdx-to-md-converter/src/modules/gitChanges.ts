import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { ManifestManager } from './manifestManager';

export interface GitChanges {
  modified: string[];
  deleted: string[];
}

const getProjectRoot = () => path.join(process.cwd(), '..');

export function getChangedMdxFiles(): GitChanges {
  const projectRoot = getProjectRoot();
  
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore', cwd: projectRoot });
    
    let modifiedOutput = '';
    let deletedOutput = '';
    
    try {
      const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';
      
      if (isCI) {
        modifiedOutput = execSync(
          'git diff --name-only --diff-filter=AM HEAD~1 HEAD -- "src/pages/**/*.mdx"',
          { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], cwd: projectRoot }
        );
        
        deletedOutput = execSync(
          'git diff --name-only --diff-filter=D HEAD~1 HEAD -- "src/pages/**/*.mdx"',
          { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], cwd: projectRoot }
        );
      } else {

        const lastCommitModified = execSync(
          'git diff --name-only --diff-filter=AM HEAD~1 HEAD -- "src/pages/**/*.mdx"',
          { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], cwd: projectRoot }
        ).trim();
        
        const workingDirModified = execSync(
          'git diff --name-only --diff-filter=AM HEAD -- "src/pages/**/*.mdx"',
          { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], cwd: projectRoot }
        ).trim();
        
        const stagedModified = execSync(
          'git diff --name-only --cached --diff-filter=AM -- "src/pages/**/*.mdx"',
          { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], cwd: projectRoot }
        ).trim();
        
        const allModified = [
          ...lastCommitModified.split('\n').filter(Boolean),
          ...workingDirModified.split('\n').filter(Boolean),
          ...stagedModified.split('\n').filter(Boolean)
        ];
        modifiedOutput = [...new Set(allModified)].join('\n');
        
        const lastCommitDeleted = execSync(
          'git diff --name-only --diff-filter=D HEAD~1 HEAD -- "src/pages/**/*.mdx"',
          { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], cwd: projectRoot }
        ).trim();
        
        const workingDirDeleted = execSync(
          'git diff --name-only --diff-filter=D HEAD -- "src/pages/**/*.mdx"',
          { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], cwd: projectRoot }
        ).trim();
        
        const allDeleted = [
          ...lastCommitDeleted.split('\n').filter(Boolean),
          ...workingDirDeleted.split('\n').filter(Boolean)
        ];
        deletedOutput = [...new Set(allDeleted)].join('\n');
      }
    } catch (diffError) {
      console.warn('Git diff failed, will process all files:', diffError);
      return { modified: [], deleted: [] };
    }
    
    const modified = modifiedOutput.trim().split('\n').filter(Boolean);
    const deleted = deletedOutput.trim().split('\n').filter(Boolean);
    
    return { modified, deleted };
  } catch (error) {
    console.warn('Git not available, will process all files:', error);
    return { modified: [], deleted: [] };
  }
}

export function shouldProcessAllFiles(): boolean {
  const projectRoot = getProjectRoot();
  
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore', cwd: projectRoot });
    
    try {
      execSync('git rev-parse HEAD~1', { stdio: 'ignore', cwd: projectRoot });
      return false;
    } catch {
      console.log('No git history available (first commit or shallow clone)');
      return true;
    }
  } catch {
    console.log('Not a git repository');
    return true;
  }
}


export function deleteCorrespondingMdFiles(deletedMdxFiles: string[]): void {
  const outputDir = path.join(process.cwd(), '..', 'public', 'llms');
  
  for (const mdxPath of deletedMdxFiles) {
    const relativePath = mdxPath.replace('src/pages/', '');
    const mdPath = path.join(outputDir, relativePath.replace(/\.mdx$/, '.md'));
    
    if (fs.existsSync(mdPath)) {
      fs.unlinkSync(mdPath);
      console.log(`✓ Deleted corresponding MD file: ${mdPath}`);
    }
  }
}

export function getAbsolutePaths(relativePaths: string[], basePath: string): string[] {
  return relativePaths.map(relPath => path.join(basePath, relPath));
}


export function findMdxFilesWithoutMd(srcPagesPath: string, outputDir: string): string[] {
  const filesToProcess: string[] = [];
  const manifest = new ManifestManager(outputDir);
  
  function traverseMdxFiles(currentDir: string) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverseMdxFiles(fullPath);
      } else if (item.endsWith('.mdx')) {
        const relativePath = path.relative(srcPagesPath, fullPath).replace(/\\/g, '/');
        
        const mdFileName = relativePath.replace(/\.mdx$/, '.md');
        const mdFilePath = path.join(outputDir, mdFileName);
        
        if (manifest.needsProcessing(fullPath, mdFilePath)) {
          filesToProcess.push(relativePath);
        }
      }
    }
  }
  
  if (fs.existsSync(srcPagesPath)) {
    traverseMdxFiles(srcPagesPath);
  }
  
  return filesToProcess;
}
