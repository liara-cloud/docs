export function removeParagraphs(content: string): string {
  return content.replace(/<p[^>]*>(.*?)<\/p>/gis, (_match, inner) => {
    return inner.trim();
  });
}
