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
  getStagedMdxFiles,
  deleteCorrespondingMdFiles,
  getAbsolutePaths,
  findMdxFilesWithoutMd
} from './modules/gitChanges';

import fs from 'fs';
import path from 'path';

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
    
    console.log('🔍 Checking staged MDX files...');
    
    const stagedChanges = getStagedMdxFiles();
    
    console.log(`📝 Found ${stagedChanges.modified.length} staged modified/added MDX files`);
    console.log(`🗑️  Found ${stagedChanges.deleted.length} staged deleted MDX files`);
    
const args = new Set(process.argv.slice(2));
const onlyStaged = args.has('--only-staged') || !args.has('--all');
const repairMissing = args.has('--repair-missing') || args.has('--repair-missing=1');
const aiEnabled = !!(process.env.MY_BASE_URL && process.env.MY_API_KEY);

console.log(`⚙️  Options -> mode: ${onlyStaged ? 'only-staged' : 'all'}, repair-missing: ${repairMissing ? 'on' : 'off'}`);
console.log(`🤖 AI enabled: ${aiEnabled ? 'yes' : 'no (will skip MD writes)'}`);
    if (stagedChanges.deleted.length > 0) {
      console.log('🗑️  Deleting corresponding MD files for deleted MDX files...');
      deleteCorrespondingMdFiles(stagedChanges.deleted);
    }
    
    console.log('🔍 Checking for MDX files without corresponding MD files...');
    const missingMdFiles = repairMissing ? findMdxFilesWithoutMd(srcPagesPath, outputDir) : [];
    
    let filesToProcess: string[] = [];
    const relPaths: string[] = [];

    relPaths.push(...stagedChanges.modified);

    if (repairMissing && missingMdFiles.length > 0) {
      console.log(`📝 Found ${missingMdFiles.length} MDX files without corresponding MD files (repair requested)`);
      const missingMdFilesFullPaths = missingMdFiles.map(relPath => `src/pages/${relPath}`);
      for (const p of missingMdFilesFullPaths) {
        if (!relPaths.includes(p)) relPaths.push(p);
      }
    }

    filesToProcess = getAbsolutePaths(relPaths, projectRoot);
    
    if (filesToProcess.length === 0 && stagedChanges.deleted.length === 0) {
      console.log('ℹ️  No MDX files to process');
      
      console.log('📝 Updating all-links file...');
      const allLinks = collectExistingMdLinks(outputDir);
      const allLinksContent = `# All Links\n\n${allLinks.sort().join('\n')}\n`;
      fs.writeFileSync(allLinksPath, '\ufeff' + allLinksContent, { encoding: 'utf8' });
      console.log(`✅ All links updated: ${allLinksPath}`);
      
      process.exit(0);
    }
    
    console.log(`📝 Processing ${filesToProcess.length} MDX files...`);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    let processedCount = 0;
    let skippedAiCount = 0;
    let errorCount = 0;
    
    for (const filePath of filesToProcess) {
      const relativePath = getRelativePath(filePath, srcPagesPath);
      const displayPath = `src/pages/${relativePath}`;
      
      try {
        console.log(`⚙️  Processing: ${displayPath}`);
        processedCount++;

        const mdxContent = readMdxFile(filePath);
        const mdContent = convertMdxToMd(mdxContent);

        const mdFileName = relativePath.replace(/\.mdx$/, '.md');
        const outputFilePath = path.join(outputDir, mdFileName);

        const outputFileDir = path.dirname(outputFilePath);
        if (!fs.existsSync(outputFileDir)) {
          fs.mkdirSync(outputFileDir, { recursive: true });
        }

        console.log(`🤖 Processing with AI: ${displayPath}`);
        const aiRes = await overviewByAI(mdContent);
        if (aiRes.status !== 'SUCCESS') {
          console.warn(`⏭️  Skipping MD write for ${displayPath} due to AI status: ${aiRes.status}`);
          skippedAiCount++;
          continue;
        }
        const aiProcessedContent = aiRes.text;

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
        console.log(`✅ Saved: ${outputFilePath}`);

      } catch (fileError) {
        errorCount++;
        console.error(`❌ Error processing ${displayPath}:`, fileError);
      }
    }
    
    console.log('📝 Updating all-links file...');
    const allExistingLinks = collectExistingMdLinks(outputDir);
    const allLinksContent = `# All Links\n\n${allExistingLinks.sort().join('\n')}\n`;
    fs.writeFileSync(allLinksPath, '\ufeff' + allLinksContent, { encoding: 'utf8' });
    console.log(`✅ All links updated: ${allLinksPath}`);
    
    console.log('\n=== Summary ===');
    console.log(`✅ Processed files: ${processedCount}`);
    console.log(`⏭️  Skipped due to AI unavailable: ${skippedAiCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`🗑️  Deleted MD files: ${stagedChanges.deleted.length}`);
    console.log(`📁 Output directory: ${outputDir}`);
    console.log(`📄 Total MD files: ${allExistingLinks.length}`);
    
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
}

main();
