import { removeHead } from './modules/removeHead';
import { convertVideos } from './modules/convertVideos';
import { removeBreaksAndDivs } from './modules/removeBreaksAndDivs';
import { convertLinks } from './modules/convertLinks';
import { convertHeadings } from './modules/convertHeadings';
import { removeParagraphs } from './modules/removeParagraphs';
import { convertImportant } from './modules/convertImportant';
import { convertAlert } from './modules/convertAlert';
import { convertHighlight } from './modules/convertHighlight';
import { convertLightboxImage } from './modules/convertLightboxImage';
import { convertTick } from './modules/convertTick';
import { convertImg } from './modules/convertImg';
import { convertTable } from './modules/convertTable';
import { convertUlLi } from './modules/convertUlLi';
import { removeAsciinema } from './modules/removeAsciinema';
import { convertSection } from './modules/convertSection';
import { convertStep } from './modules/convertStep';
import { removeHrAndLayout } from './modules/removeHrAndLayout';
import { removeIndentations } from './modules/removeIndentations';

import fs from 'fs';
import path from 'path';

function findMdxFiles(dir: string): string[] {
  const files: string[] = [];
  
  function traverse(currentDir: string) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.mdx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function readMdxFile(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf-8');
}

function convertMdxToMd(mdxContent: string): string {
  let content = mdxContent;

  const layoutIndex = content.indexOf('<Layout');
  if (layoutIndex !== -1) {
    content = content.slice(layoutIndex).trim();
  }

  content = removeHead(content);

  content = convertVideos(content);

  content = removeBreaksAndDivs(content);

  content = convertLinks(content);

  content = convertHeadings(content);

  content = removeParagraphs(content);

  content = convertImportant(content);

  content = convertAlert(content);

  content = convertHighlight(content);

  content = convertLightboxImage(content);

  content = convertTick(content);

  content = convertImg(content);

  content = convertTable(content);

  content = convertUlLi(content);

  content = removeAsciinema(content);

  content = convertSection(content);

  content = convertStep(content);

  content = removeHrAndLayout(content);

  content = removeIndentations(content);

  return content;
}

function getRelativePath(filePath: string, basePath: string): string {
  return path.relative(basePath, filePath).replace(/\\/g, '/');
}

try {
  const srcPagesPath = path.join(process.cwd(), 'src', 'pages');
  const outputPath = path.join(process.cwd(), 'llms.txt');
  
  console.log(`🔍 Searching for MDX files in: ${srcPagesPath}`);
  
  const mdxFiles = findMdxFiles(srcPagesPath);
  
  if (mdxFiles.length === 0) {
    console.log('❌ No MDX files found in src/pages');
    process.exit(1);
  }
  
  console.log(`📁 Found ${mdxFiles.length} MDX files`);
  
  let combinedContent = '';
  
  for (const filePath of mdxFiles) {
    try {
      console.log(`📄 Processing: ${filePath}`);
      
      const mdxContent = readMdxFile(filePath);
      
      const mdContent = convertMdxToMd(mdxContent);
      
      const relativePath = getRelativePath(filePath, srcPagesPath);
      
      combinedContent += `\n\n# File: ${relativePath}\n\n`;
      combinedContent += mdContent;
      combinedContent += '\n\n---\n';
      
    } catch (fileError) {
      console.error(`❌ Error processing ${filePath}:`, fileError);
    }
  }
  
  fs.writeFileSync(outputPath, combinedContent.trim(), 'utf-8');
  console.log(`✅ All files converted and saved to: ${outputPath}`);
  console.log(`📊 Total files processed: ${mdxFiles.length}`);
  
} catch (err) {
  console.error('❌ Error:', err);
  process.exit(1);
}
