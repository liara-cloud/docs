import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

interface ManifestEntry {
  mdxPath: string;
  mdPath: string;
  mdxHash: string;
  lastProcessed: string;
}

interface Manifest {
  version: string;
  entries: Record<string, ManifestEntry>;
}

const MANIFEST_VERSION = '1.0.0';

export class ManifestManager {
  private manifestPath: string;
  private manifest: Manifest;

  constructor(outputDir: string) {
    this.manifestPath = path.join(outputDir, '.mdx-to-md-manifest.json');
    this.manifest = this.loadManifest();
  }

  private loadManifest(): Manifest {
    if (fs.existsSync(this.manifestPath)) {
      try {
        const content = fs.readFileSync(this.manifestPath, 'utf-8');
        return JSON.parse(content);
      } catch (error) {
        console.warn('Failed to load manifest, creating new one:', error);
      }
    }
    
    return {
      version: MANIFEST_VERSION,
      entries: {}
    };
  }

  private saveManifest(): void {
    try {
      fs.writeFileSync(
        this.manifestPath,
        JSON.stringify(this.manifest, null, 2),
        'utf-8'
      );
    } catch (error) {
      console.error('Failed to save manifest:', error);
    }
  }

  /**
   * Calculate MD5 hash of a file
   */
  private calculateFileHash(filePath: string): string {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      return crypto.createHash('md5').update(content).digest('hex');
    } catch (error) {
      return '';
    }
  }

  /**
   * Check if an MDX file needs to be processed
   * Returns true if:
   * - File is not in manifest
   * - File hash has changed
   * - Corresponding MD file doesn't exist
   */
  needsProcessing(mdxPath: string, mdPath: string): boolean {
    const entry = this.manifest.entries[mdxPath];
    
    // If not in manifest, needs processing
    if (!entry) {
      return true;
    }
    
    // If MD file doesn't exist, needs processing
    if (!fs.existsSync(mdPath)) {
      return true;
    }
    
    // If MDX file hash has changed, needs processing
    const currentHash = this.calculateFileHash(mdxPath);
    if (currentHash !== entry.mdxHash) {
      return true;
    }
    
    return false;
  }

  /**
   * Mark a file as processed
   */
  markAsProcessed(mdxPath: string, mdPath: string): void {
    const mdxHash = this.calculateFileHash(mdxPath);
    
    this.manifest.entries[mdxPath] = {
      mdxPath,
      mdPath,
      mdxHash,
      lastProcessed: new Date().toISOString()
    };
    
    this.saveManifest();
  }

  /**
   * Remove entry from manifest (when MDX file is deleted)
   */
  removeEntry(mdxPath: string): void {
    delete this.manifest.entries[mdxPath];
    this.saveManifest();
  }

  /**
   * Get all entries
   */
  getAllEntries(): Record<string, ManifestEntry> {
    return this.manifest.entries;
  }

  /**
   * Clean up entries for files that no longer exist
   */
  cleanup(existingMdxFiles: string[]): void {
    const existingSet = new Set(existingMdxFiles);
    let changed = false;
    
    for (const mdxPath in this.manifest.entries) {
      if (!existingSet.has(mdxPath)) {
        delete this.manifest.entries[mdxPath];
        changed = true;
      }
    }
    
    if (changed) {
      this.saveManifest();
    }
  }
}
