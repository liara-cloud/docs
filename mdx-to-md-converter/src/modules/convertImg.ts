export function convertImg(content: string): string {
  return content.replace(
    /<img\s+src="([^"]+)"\s+alt="([^"]+)"\s*\/>/gi,
    (_match, src, alt) => {
      return `![${alt}](${src})`;
    }
  );
}
