export function convertLightboxImage(content: string): string {
  return content.replace(
    /<LightboxImage\s+src="([^"]+)"\s+alt="([^"]+)"\s*\/>/gi,
    (_match, src, alt) => {
      return `![${alt}](${src})`;
    }
  );
}
