import fs from 'fs';
import path from 'path';

export function stripImports(content: string, outputFile: string): void {
  const layoutIndex = content.indexOf('<Layout');

  if (layoutIndex === -1) {
    throw new Error(`<Layout> tag not found in MDX content`);
  }

  const stripped = content.slice(layoutIndex).trim();

  const outputPath = path.join(process.cwd(), outputFile);
  fs.writeFileSync(outputPath, stripped, 'utf-8');
  console.log(`✅ Processed file saved at: ${outputPath}`);
}
