export function convertLinks(content: string): string {
  return content
    // Handle <Link ...> ... </Link>
    .replace(
      /<Link[^>]*href="([^"]+)"[^>]*>(.*?)<\/Link>/gis,
      (_match, href, text) => {
        const finalHref = href.startsWith('/')
          ? `https://docs.liara.ir${href}`
          : href;
        return `[${text.trim()}](${finalHref})`;
      }
    )
    // Handle <a ...> ... </a>
    .replace(
      /<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gis,
      (_match, href, text) => {
        const finalHref = href.startsWith('/')
          ? `https://docs.liara.ir${href}`
          : href;
        return `[${text.trim()}](${finalHref})`;
      }
    );
}
