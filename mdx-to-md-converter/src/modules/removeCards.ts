
export function removeCards(content: string): string {
  return content.replace(
    /<div[^>]*>\s*\{\s*\[[\s\S]*?\]\.map\([\s\S]*?<Card[\s\S]*?<\/Card>[\s\S]*?\)\s*\}\s*<\/div>/gi,
    ''
  );
}
