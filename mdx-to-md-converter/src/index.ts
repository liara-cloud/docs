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

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

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

function getChangedMdxFiles(srcPagesPath: string): string[] {
  try {
    let gitCommand = 'git diff --name-only HEAD~1';
    
    try {
      execSync('git rev-parse HEAD~1', { stdio: 'ignore' });
    } catch {
      gitCommand = 'git ls-files';
    }
    
    const changedFiles = execSync(gitCommand, { encoding: 'utf-8' })
      .split('\n')
      .filter(file => file.trim())
      .filter(file => file.startsWith('src/pages/') && file.endsWith('.mdx'))
      .map(file => path.resolve(file));
    
    console.log(`Git detected ${changedFiles.length} changed MDX files`);
    return changedFiles;
  } catch (error) {
    console.warn('Git detection failed, processing all files:', error);
    return findMdxFiles(srcPagesPath);
  }
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
  // content = convertTable(content);
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

async function main() {
  try {
    const srcPagesPath = path.join(process.cwd(), '..', 'src', 'pages');
    const outputDir = path.join(process.cwd(), '..', 'public', 'llms');
    const allLinksPath = path.join(process.cwd(), '..', 'public', 'all-links-llms.txt');
    
    console.log(`Searching for MDX files in: ${srcPagesPath}`);
    
    const changedMdxFiles = getChangedMdxFiles(srcPagesPath);
    const allMdxFiles = findMdxFiles(srcPagesPath);
    
    console.log(`Found ${allMdxFiles.length} total MDX files`);
    console.log(`Processing ${changedMdxFiles.length} changed MDX files`);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const allLinks: string[] = [];
    
    let processedCount = 0;
    let skippedCount = 0;
    
    for (const filePath of allMdxFiles) {
      const relativePath = getRelativePath(filePath, srcPagesPath);
      const displayPath = `src/pages/${relativePath}`;
      const mdFileName = relativePath.replace(/\.mdx$/, '.md');
      const outputFilePath = path.join(outputDir, mdFileName);
      
      const isChanged = changedMdxFiles.includes(filePath);
      
      if (!isChanged && fs.existsSync(outputFilePath)) {
        console.log(`Skipped (unchanged): ${displayPath}`);
        skippedCount++;
        
        const existingContent = fs.readFileSync(outputFilePath, 'utf-8');
        const urlPath = `llms/${mdFileName.replace(/\\/g, '/')}`;
        const url = `https://docs.liara.ir/${urlPath}`;
        
        let title = mdFileName.replace(/\.md$/, '').replace(/\//g, ' > ');
        const headingMatch = existingContent.match(/^#\s+(.+)$/m);
        if (headingMatch) {
          title = headingMatch[1].trim();
        }
        
        allLinks.push(`- [${title}](${url})`);
        continue;
      }
      
      try {
        console.log(`Processing (${isChanged ? 'changed' : 'new'}): ${displayPath}`);
        processedCount++;
        
        const mdxContent = readMdxFile(filePath);
        const mdContent = convertMdxToMd(mdxContent);
        
        console.log(`Processing with AI: ${displayPath}`);
        const aiProcessedContent = await overviewByAI(mdContent);
        
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
          aiProcessedContent +
          '\n\n## all links\n\n[All links of docs](https://docs.liara.ir/all-links-llms.txt)\n';
        
        fs.writeFileSync(outputFilePath, '\ufeff' + finalMdContent, { encoding: 'utf8' });
        console.log(`Saved: ${outputFilePath}`);
        
        const urlPath = `llms/${mdFileName.replace(/\\/g, '/')}`;
        const url = `https://docs.liara.ir/${urlPath}`;
        
        let title = mdFileName.replace(/\.md$/, '').replace(/\//g, ' > ');
        const headingMatch = mdContent.match(/^#\s+(.+)$/m);
        if (headingMatch) {
          title = headingMatch[1].trim();
        }
        
        allLinks.push(`- [${title}](${url})`);
        
      } catch (fileError) {
        console.error(`Error processing ${displayPath}:`, fileError);
      }
    }
    
    const allLinksContent = `# All Links\n\n${allLinks.sort().join('\n')}\n`;
    
    fs.writeFileSync(allLinksPath, '\ufeff' + allLinksContent, { encoding: 'utf8' });
    console.log(`All links saved to: ${allLinksPath}`);
    
    console.log('\nSummary:');
    console.log(`   Total files found: ${allMdxFiles.length}`);
    console.log(`   Processed (new/changed): ${processedCount}`);
    console.log(`   Skipped (unchanged): ${skippedCount}`);
    console.log(`   All files saved to: ${outputDir}`);
    
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
