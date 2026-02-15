import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const CACHE_FILE = path.join(process.cwd(), '.hash-cache.json');
const FAILED_CACHE_FILE = path.join(process.cwd(), '.failed-cache.json');

export interface HashCache {
  [filePath: string]: string;
}

export function generateHash(content: string): string {
  return crypto.createHash('md5').update(content).digest('hex');
}

export function loadHashCache(): HashCache {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const data = fs.readFileSync(CACHE_FILE, 'utf-8');
      const cache = JSON.parse(data);
      return migrateAbsolutePathsToRelative(cache);
    }
  } catch (error) {
    console.warn('Failed to load hash cache, starting fresh:', error);
  }
  return {};
}

function migrateAbsolutePathsToRelative(cache: HashCache): HashCache {
  const migratedCache: HashCache = {};
  
  for (const [filePath, hash] of Object.entries(cache)) {
    if (filePath.startsWith('src/pages/')) {
      migratedCache[filePath] = hash;
    }
    else if (filePath.includes('\\src\\pages\\') || filePath.includes('/src/pages/')) {
      const srcPagesIndex = filePath.indexOf('src/pages/') !== -1
        ? filePath.indexOf('src/pages/')
        : filePath.indexOf('src\\pages\\');
      
      if (srcPagesIndex !== -1) {
        const relativePath = filePath.substring(srcPagesIndex).replace(/\\/g, '/');
        migratedCache[relativePath] = hash;
      } else {
        migratedCache[filePath] = hash;
      }
    }
    else if (filePath.includes('mdx-to-md-converter/src/pages/')) {
      const srcPagesIndex = filePath.indexOf('src/pages/');
      if (srcPagesIndex !== -1) {
        const relativePath = filePath.substring(srcPagesIndex).replace(/\\/g, '/');
        migratedCache[relativePath] = hash;
      } else {
        migratedCache[filePath] = hash;
      }
    }
    else {
      migratedCache[filePath] = hash;
    }
  }
  
  return migratedCache;
}

export function saveHashCache(cache: HashCache): void {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to save hash cache:', error);
  }
}

export function hasFileChanged(filePath: string, content: string, cache: HashCache): boolean {
  const currentHash = generateHash(content);
  const cachedHash = cache[filePath];
  
  if (!cachedHash) {
    console.log(`No cached hash for ${filePath}, treating as changed`);
    return true;
  }
  
  const hasChanged = currentHash !== cachedHash;
  if (hasChanged) {
    console.log(`Hash changed for ${filePath}`);
  }
  return hasChanged;
}

export function updateFileHash(filePath: string, content: string, cache: HashCache): void {
  cache[filePath] = generateHash(content);
}

export function loadFailedCache(): string[] {
  try {
    if (fs.existsSync(FAILED_CACHE_FILE)) {
      const data = fs.readFileSync(FAILED_CACHE_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn('Failed to load failed cache:', error);
  }
  return [];
}

export function saveFailedCache(failedFiles: string[]): void {
  try {
    fs.writeFileSync(FAILED_CACHE_FILE, JSON.stringify(failedFiles, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to save failed cache:', error);
  }
}

export function addToFailedCache(filePath: string, failedFiles: string[]): void {
  if (!failedFiles.includes(filePath)) {
    failedFiles.push(filePath);
  }
}

export function removeFromFailedCache(filePath: string, failedFiles: string[]): void {
  const index = failedFiles.indexOf(filePath);
  if (index !== -1) {
    failedFiles.splice(index, 1);
  }
}
