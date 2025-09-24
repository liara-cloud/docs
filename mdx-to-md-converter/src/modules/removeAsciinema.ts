export function removeAsciinema(content: string): string {
  return content.replace(/<Asciinema[^>]*\/>/gi, '');
}
