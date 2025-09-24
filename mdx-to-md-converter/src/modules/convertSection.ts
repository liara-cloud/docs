export function convertSection(content: string): string {
  return content.replace(
    /<Section[^>]*title=(["'])(.*?)\1(?:[^>]*headingTags=(["'])(.*?)\3)?[^>]*\/>/gi,
    (_match, _quote1: string, title: string, _quote2: string, headingTag: string | undefined) => {
      let hashes = '##'; // default h2
      if (headingTag) {
        const level = parseInt(headingTag.replace('h', ''), 10);
        if (!isNaN(level) && level >= 1 && level <= 6) {
          hashes = '#'.repeat(level);
        }
      }
      return `${hashes} ${title.trim()}`;
    }
  );
}
