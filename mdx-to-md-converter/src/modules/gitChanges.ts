import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export interface GitChanges {
  modified: string[];
  deleted: string[];
}

/**
 * Get changed MDX files using git diff
 * Returns files that are modified, added, or deleted
 */
export function getChangedMdxFiles(): GitChanges {
  try {
    // Check if we're in a git repository
    execSync('git rev-parse --git-dir', { stdio: 'ignore' });
    
    // Try to get changes from last commit
    // If this is the first commit or git history is not available, fall back to all files
    let modifiedOutput = '';
    let deletedOutput = '';
    
    try {
      // Get modified and added files (AM = Added, Modified)
      modifiedOutput = execSync(
        'git diff --name-only --diff-filter=AM HEAD~1 HEAD -- "src/pages/**/*.mdx"',
        { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
      );
      
      // Get deleted files
      deletedOutput = execSync(
        'git diff --name-only --diff-filter=D HEAD~1 HEAD -- "src/pages/**/*.mdx"',
        { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
      );
    } catch (diffError) {
      // If git diff fails (e.g., first commit, shallow clone), return empty
      console.warn('Git diff failed, will process all files:', diffError);
      return { modified: [], deleted: [] };
    }
    
    const modified = modifiedOutput.trim().split('\n').filter(Boolean);
    const deleted = deletedOutput.trim().split('\n').filter(Boolean);
    
    return { modified, deleted };
  } catch (error) {
    // Not a git repository or git not available
    console.warn('Git not available, will process all files:', error);
    return { modified: [], deleted: [] };
  }
}

/**
 * Check if we should process all files (first run or no git history)
 */
export function shouldProcessAllFiles(): boolean {
  try {
    // Check if we're in a git repository
    execSync('git rev-parse --git-dir', { stdio: 'ignore' });
    
    // Check if we have at least one commit
    try {
      execSync('git rev-parse HEAD~1', { stdio: 'ignore' });
      return false; // We have history, don't process all
    } catch {
      // No previous commit, this is first commit or shallow clone
      console.log('No git history available (first commit or shallow clone)');
      return true;
    }
  } catch {
    // Not a git repository
    console.log('Not a git repository');
    return true;
  }
}

/**
 * Delete MD files corresponding to deleted MDX files
 */
export function deleteCorrespondingMdFiles(deletedMdxFiles: string[]): void {
  const outputDir = path.join(process.cwd(), '..', 'public', 'llms');
  
  for (const mdxPath of deletedMdxFiles) {
    // Convert src/pages/ai/about.mdx -> ai/about.md
    const relativePath = mdxPath.replace('src/pages/', '');
    const mdPath = path.join(outputDir, relativePath.replace(/\.mdx$/, '.md'));
    
    if (fs.existsSync(mdPath)) {
      fs.unlinkSync(mdPath);
      console.log(`✓ Deleted corresponding MD file: ${mdPath}`);
    }
  }
}

/**
 * Get absolute paths for changed MDX files
 */
export function getAbsolutePaths(relativePaths: string[], basePath: string): string[] {
  return relativePaths.map(relPath => path.join(basePath, relPath));
}
