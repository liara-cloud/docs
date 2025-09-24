export function convertUlLi(content: string): string {
  return content.replace(/<ul>([\s\S]*?)<\/ul>/gi, (_match, inner) => {
    // Match each <li>...</li> inside the <ul>
    const items = inner.match(/<li>([\s\S]*?)<\/li>/gi);
    if (!items) return '';

    // Convert each <li> to Markdown with '- ' prefix
    const mdItems = items.map((li: string) => {
      // Remove <li> and </li> tags
      const text = li.replace(/<\/?li>/gi, '').trim();
      return `- ${text}`;
    });

    return mdItems.join('\n');
  });
}
