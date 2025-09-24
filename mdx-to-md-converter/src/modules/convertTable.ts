export function convertTable(content: string): string {
  return content.replace(
    /<Table\s+headers=\{\s*(\[[\s\S]*?\])\s*\}\s+data=\{\s*(\[[\s\S]*?\])\s*\}\s*\/>/gi,
    (_match, headersStr, dataStr) => {
      try {
        // Evaluate the arrays safely
        const headers: string[] = eval(headersStr);
        const data: string[][] = eval(dataStr);

        // Build header row
        const headerRow = `| ${headers.join(' | ')} |`;
        const separatorRow = `|${headers.map(() => '---').join('|')}|`;

        // Build data rows
        const dataRows = data.map(row => `| ${row.join(' | ')} |`).join('\n');

        return `${headerRow}\n${separatorRow}\n${dataRows}`;
      } catch (err) {
        console.error('Failed to convert table', err);
        return ''; // Remove table if conversion fails
      }
    }
  );
}
