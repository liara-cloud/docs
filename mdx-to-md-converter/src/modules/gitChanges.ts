import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export interface GitChanges {
  modified: string[];
  deleted: string[];
}

export function getChangedMdxFiles(): GitChanges {
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore' });
    
    let modifiedOutput = '';
    let deletedOutput = '';
    
    try {
      modifiedOutput = execSync(
        'git diff --name-only --diff-filter=AM HEAD~1 HEAD -- "src/pages/**/*.mdx"',
        { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
      );
      
      deletedOutput = execSync(
        'git diff --name-only --diff-filter=D HEAD~1 HEAD -- "src/pages/**/*.mdx"',
        { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
      );
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
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore' });
    
    try {
      execSync('git rev-parse HEAD~1', { stdio: 'ignore' });
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
