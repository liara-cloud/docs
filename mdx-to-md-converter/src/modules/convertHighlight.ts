export function convertHighlight(content: string): string {
  return content.replace(
    // Match optional wrapping <div dir='ltr'>, inner <Highlight>, then </div>
    /(?:<div\s+dir=['"]ltr['"]>\s*)?<Highlight[^>]*className="([^"]+)"[^>]*>\s*\{\`([\s\S]*?)\`\}\s*<\/Highlight>\s*(?:<\/div>)?/gi,
    (_match, lang, code) => {
      return `\`\`\`${lang.trim()}\n${code}\n\`\`\``;
    }
  );
}
