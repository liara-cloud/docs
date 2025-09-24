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
  const srcPagesPath = path.join(process.cwd(), '..', 'src', 'pages');
  const outputDir = path.join(process.cwd(), '..', 'src', 'pages', 'llms');
  const allLinksPath = path.join(process.cwd(), '..', 'public', 'all-links-llms.txt');
  
  console.log(`Searching for MDX files in: ${srcPagesPath}`);
  
  const mdxFiles = findMdxFiles(srcPagesPath);
  
  if (mdxFiles.length === 0) {
    console.log('No MDX files found in src/pages');
    process.exit(1);
  }
  
  console.log(`Found ${mdxFiles.length} MDX files`);
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Array to store all the generated links
  const allLinks: string[] = [];
  
  for (const filePath of mdxFiles) {
    try {
      console.log(`Processing: ${filePath}`);
      
      const mdxContent = readMdxFile(filePath);
      
      const mdContent = convertMdxToMd(mdxContent);
      
      const relativePath = getRelativePath(filePath, srcPagesPath);
      const mdFileName = relativePath.replace(/\.mdx$/, '.md');
      const outputFilePath = path.join(outputDir, mdFileName);
      
      const outputFileDir = path.dirname(outputFilePath);
      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir, { recursive: true });
      }
      
      // Add the "all links" section to the end of each MD file
      const finalMdContent = mdContent + '\n\n## all links\n\n[All links of docs](https://docs.liara.ir/all-links-llms.txt)\n';
      
      fs.writeFileSync(outputFilePath, finalMdContent, 'utf-8');
      console.log(`Saved: ${outputFilePath}`);
      
      // Generate URL for all-links.txt (remove .md extension from URL)
      const urlPath = `llms/${mdFileName.replace(/\\/g, '/').replace(/\.md$/, '')}`;
      const url = `https://docs.liara.ir/${urlPath}`;
      
      // Extract title from the first heading in the content or use filename
      let title = mdFileName.replace(/\.md$/, '').replace(/\//g, ' > ');
      const headingMatch = mdContent.match(/^#\s+(.+)$/m);
      if (headingMatch) {
        title = headingMatch[1].trim();
      }
      
      allLinks.push(`- [${title}](${url})`);
      
    } catch (fileError) {
      console.error(`Error processing ${filePath}:`, fileError);
    }
  }
  
  // Generate all-links.txt content
  const allLinksContent = `# All Links\n\n${allLinks.sort().join('\n')}\n`;
  
  // Write all-links.txt
  fs.writeFileSync(allLinksPath, allLinksContent, 'utf-8');
  console.log(`✅ All links saved to: ${allLinksPath}`);
  
  console.log(`All files converted and saved to: ${outputDir}`);
  console.log(`Total files processed: ${mdxFiles.length}`);
  
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
