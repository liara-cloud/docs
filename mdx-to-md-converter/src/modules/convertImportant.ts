export function convertImportant(content: string): string {
  return content.replace(/<Important[^>]*>(.*?)<\/Important>/gis, (_match, inner) => {
    return `\`${inner.trim()}\``;
  });
}
