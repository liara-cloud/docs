export function convertVideos(content: string): string {
  // Regex matches <video ...>...</video> or self-closing <video .../>
  return content.replace(
    /<video[^>]*src="([^"]+)"[^>]*>(.*?)<\/video>|<video[^>]*src="([^"]+)"[^>]*(?:\/>)/gi,
    (_match, p1, _inner, p3) => {
      const src = p1 || p3; // src could be captured in group 1 or group 3
      return `[Video link](${src})`;
    }
  );
}
