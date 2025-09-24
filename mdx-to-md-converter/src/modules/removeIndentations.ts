export function removeIndentations(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];
  let inCodeBlock = false;
  
  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      result.push(line.trim());
    } else if (inCodeBlock) {
      result.push(line);
    } else {
      result.push(line.trimStart());
    }
  }
  
  return result.join('\n');
}