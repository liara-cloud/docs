export function removeHead(content: string): string {
  return content.replace(/<Head[\s\S]*?<\/Head>/gi, '').trim();
}
