export function convertAlert(content: string): string {
  return content.replace(/<Alert[^>]*>([\s\S]*?)<\/Alert>/gi, (_match, inner) => {
    // Trim each line and prefix with '> '
    const lines = inner
      .split('\n')
      .map((line: string) => line.trim())  // <-- explicitly type 'line' as string
      .filter((line: string) => line.length > 0);

    return lines.map((line: string) => `> ${line}`).join('\n');
  });
}
