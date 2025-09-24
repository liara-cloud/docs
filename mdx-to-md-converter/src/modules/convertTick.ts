export function convertTick(content: string): string {
  return content
    .replace(/<TickIcon\s*\/>/gi, '✅')
    .replace(/<TickBadge\s*\/>/gi, '✅');
}
