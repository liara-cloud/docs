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
import { overviewByAI } from './modules/overviewByAI';
import { 
  getChangedMdxFiles, 
  shouldProcessAllFiles, 
  deleteCorrespondingMdFiles,
  getAbsolutePaths 
} from './modules/gitChanges';

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

function collectExistingMdLinks(outputDir: string): string[] {
  const links: string[] = [];
  
  if (!fs.existsSync(outputDir)) {
    return links;
  }
  
  function traverse(currentDir: string) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.md')) {
        const relativePath = path.relative(outputDir, fullPath).replace(/\\/g, '/');
        const urlPath = `llms/${relativePath}`;
        const url = `https://docs.liara.ir/${urlPath}`;
        
        // Try to extract title from first heading
        const content = fs.readFileSync(fullPath, 'utf-8');
        let title = relativePath.replace(/\.md$/, '').replace(/\//g, ' > ');
        const headingMatch = content.match(/^#\s+(.+)$/m);
        if (headingMatch) {
          title = headingMatch[1].trim();
        }
        
        links.push(`- [${title}](${url})`);
      }
    }
  }
  
  traverse(outputDir);
  return links;
}

async function main() {
  try {
    const projectRoot = path.join(process.cwd(), '..');
    const srcPagesPath = path.join(projectRoot, 'src', 'pages');
    const outputDir = path.join(projectRoot, 'public', 'llms');
    const allLinksPath = path.join(projectRoot, 'public', 'all-links-llms.txt');
    
    console.log(`Searching for MDX files in: ${srcPagesPath}`);
    
    // Determine which files to process
    const processAll = shouldProcessAllFiles();
    let filesToProcess: string[] = [];
    
    if (processAll) {
      console.log('Processing all files (no git history or first run)');
      filesToProcess = findMdxFiles(srcPagesPath);
    } else {
      console.log('Using git to detect changes...');
      const changes = getChangedMdxFiles();
      
      console.log(`Git detected ${changes.modified.length} modified/added files`);
      console.log(`Git detected ${changes.deleted.length} deleted files`);
      
      // Delete corresponding MD files for deleted MDX files
      if (changes.deleted.length > 0) {
        deleteCorrespondingMdFiles(changes.deleted);
      }
      
      // Get absolute paths for modified files
      filesToProcess = getAbsolutePaths(changes.modified, projectRoot);
    }
    
    if (filesToProcess.length === 0 && !processAll) {
      console.log('No MDX files changed, skipping conversion');
      
      // Still generate all-links file from existing MD files
      console.log('Generating all-links from existing MD files...');
      const allLinks = collectExistingMdLinks(outputDir);
      const allLinksContent = `# All Links\n\n${allLinks.sort().join('\n')}\n`;
      fs.writeFileSync(allLinksPath, '\ufeff' + allLinksContent, { encoding: 'utf8' });
      console.log(`All links saved to: ${allLinksPath}`);
      
      process.exit(0);
    }
    
    console.log(`Found ${filesToProcess.length} MDX files to process`);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const allLinks: string[] = [];
    let processedCount = 0;
    
    for (const filePath of filesToProcess) {
      const relativePath = getRelativePath(filePath, srcPagesPath);
      const displayPath = `src/pages/${relativePath}`;
      
      try {
        console.log(`Processing: ${displayPath}`);
        processedCount++;
        
        const mdxContent = readMdxFile(filePath);
        const mdContent = convertMdxToMd(mdxContent);
        
        console.log(`Processing with AI: ${displayPath}`);
        const aiProcessedContent = await overviewByAI(mdContent);
        
        const informal_md = aiProcessedContent;
        const mdFileName = relativePath.replace(/\.mdx$/, '.md');
        const outputFilePath = path.join(outputDir, mdFileName);
        
        const outputFileDir = path.dirname(outputFilePath);
        if (!fs.existsSync(outputFileDir)) {
          fs.mkdirSync(outputFileDir, { recursive: true });
        }
        
        let originalPath = relativePath.replace(/\.mdx$/, '');
        if (originalPath.endsWith('/index')) {
          originalPath = originalPath.slice(0, -('/index'.length));
        }
        const originalUrl = `https://docs.liara.ir/${originalPath}${originalPath.endsWith('/') ? '' : '/'}`;
        const originalHeader = `Original link: ${originalUrl}\n\n`;

        const finalMdContent =
          originalHeader +
          informal_md +
          '\n\n## all links\n\n[All links of docs](https://docs.liara.ir/all-links-llms.txt)\n';
        
        fs.writeFileSync(outputFilePath, '\ufeff' + finalMdContent, { encoding: 'utf8' });
        console.log(`✓ Saved: ${outputFilePath}`);
        
        const urlPath = `llms/${mdFileName.replace(/\\/g, '/')}`;
        const url = `https://docs.liara.ir/${urlPath}`;
        
        let title = mdFileName.replace(/\.md$/, '').replace(/\//g, ' > ');
        const headingMatch = mdContent.match(/^#\s+(.+)$/m);
        if (headingMatch) {
          title = headingMatch[1].trim();
        }
        
        allLinks.push(`- [${title}](${url})`);
        
      } catch (fileError) {
        console.error(`✗ Error processing ${displayPath}:`, fileError);
      }
    }
    
    // Collect links from all existing MD files (both newly processed and previously existing)
    console.log('Collecting all links from existing MD files...');
    const allExistingLinks = collectExistingMdLinks(outputDir);
    
    const allLinksContent = `# All Links\n\n${allExistingLinks.sort().join('\n')}\n`;
    fs.writeFileSync(allLinksPath, '\ufeff' + allLinksContent, { encoding: 'utf8' });
    console.log(`✓ All links saved to: ${allLinksPath}`);
    
    console.log('\n=== Summary ===');
    console.log(`Processed files: ${processedCount}`);
    console.log(`Output directory: ${outputDir}`);
    console.log(`Total MD files: ${allExistingLinks.length}`);
    
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
