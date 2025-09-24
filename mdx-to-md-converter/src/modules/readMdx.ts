import fs from 'fs';
import path from 'path';

// Reads an MDX file from project root
export function readMdxFile(fileName: string): string {
  const filePath = path.join(process.cwd(), fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf-8');
}
