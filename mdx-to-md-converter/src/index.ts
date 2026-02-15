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
import { loadHashCache, saveHashCache, hasFileChanged, updateFileHash, loadFailedCache, saveFailedCache, addToFailedCache, removeFromFailedCache } from './modules/hashCache';

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

async function main() {
  try {
    const srcPagesPath = path.join(process.cwd(), '..', 'src', 'pages');
    const outputDir = path.join(process.cwd(), '..', 'public', 'llms');
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
    
    const hashCache = loadHashCache();
    console.log('Loaded hash cache');

    const failedCache = loadFailedCache();
    console.log(`Loaded failed cache with ${failedCache.length} files`);
    
    const allLinks: string[] = [];
    
    let processedCount = 0;
    let skippedCount = 0;
    let failedCount = 0;
    
    const filesToProcess = [...mdxFiles];
    filesToProcess.sort((a, b) => {
      const relativePathA = getRelativePath(a, srcPagesPath);
      const displayPathA = `src/pages/${relativePathA}`;
      const relativePathB = getRelativePath(b, srcPagesPath);
      const displayPathB = `src/pages/${relativePathB}`;
      
      const isAFailed = failedCache.includes(displayPathA);
      const isBFailed = failedCache.includes(displayPathB);
      
      if (isAFailed && !isBFailed) return -1;
      if (!isAFailed && isBFailed) return 1;
      return 0;
    });

    for (const filePath of filesToProcess) {
      const relativePath = getRelativePath(filePath, srcPagesPath);
      const displayPath = `src/pages/${relativePath}`;
      
    try {
      const mdxContent = readMdxFile(filePath);
      
      const isFailed = failedCache.includes(displayPath);

      if (!isFailed && !hasFileChanged(displayPath, mdxContent, hashCache)) {
        console.log(`Skipped (unchanged): ${displayPath}`);
        skippedCount++;
        const mdFileName = relativePath.replace(/\.mdx$/, '.md');
        const outputFilePath = path.join(outputDir, mdFileName);
        
        if (fs.existsSync(outputFilePath)) {
          const existingContent = fs.readFileSync(outputFilePath, 'utf-8');
          const urlPath = `llms/${mdFileName.replace(/\\/g, '/')}`;
          const url = `https://docs.liara.ir/${urlPath}`;
          
          let title = mdFileName.replace(/\.md$/, '').replace(/\//g, ' > ');
          const headingMatch = existingContent.match(/^#\s+(.+)$/m);
          if (headingMatch) {
            title = headingMatch[1].trim();
          }
          
          allLinks.push(`- [${title}](${url})`);
        }
        
        continue;
      }
      
      if (isFailed) {
        console.log(`Retrying failed file: ${displayPath}`);
      } else {
        console.log(`Processing (new/modified): ${displayPath}`);
      }
      processedCount++;
      
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
      console.log(`Saved: ${outputFilePath}`);
      
      updateFileHash(displayPath, mdxContent, hashCache);
      
      if (isFailed) {
        removeFromFailedCache(displayPath, failedCache);
        saveFailedCache(failedCache);
        console.log(`Removed from failed cache: ${displayPath}`);
      }

      saveHashCache(hashCache);
      console.log(`Hash cache updated`);
      
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
      addToFailedCache(displayPath, failedCache);
      saveFailedCache(failedCache);
      failedCount++;
    }
  }
  
    saveHashCache(hashCache);
    console.log('Saved hash cache');
    
    const allLinksContent = `# All Links\n\n${allLinks.sort().join('\n')}\n`;
    
    fs.writeFileSync(allLinksPath, '\ufeff' + allLinksContent, { encoding: 'utf8' });
    console.log(`All links saved to: ${allLinksPath}`);
    
    console.log('\nSummary:');
    console.log(`   Total files found: ${mdxFiles.length}`);
    console.log(`   Processed (new/modified/retried): ${processedCount}`);
    console.log(`   Skipped (unchanged): ${skippedCount}`);
    console.log(`   Failed: ${failedCount}`);
    console.log(`   All files saved to: ${outputDir}`);
    
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
