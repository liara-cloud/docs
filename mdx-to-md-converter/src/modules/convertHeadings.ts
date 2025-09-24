export function convertHeadings(content: string): string {
  return content.replace(/<h([2-6])[^>]*>(.*?)<\/h\1>/gis, (_match, level, text) => {
    const sharps = '#'.repeat(Number(level));
    return `${sharps} ${text.trim()}`;
  });
}
