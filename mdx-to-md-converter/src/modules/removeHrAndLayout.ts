export function removeHrAndLayout(content: string): string {
  let result = content;

  // Remove all <hr ... /> tags (self-closing)
  result = result.replace(/<hr[^>]*\/>/gi, '');

  // Remove only <Layout> and </Layout> tags but keep inner content
  result = result.replace(/<Layout[^>]*>/gi, '');
  result = result.replace(/<\/Layout>/gi, '');

  return result;
}
