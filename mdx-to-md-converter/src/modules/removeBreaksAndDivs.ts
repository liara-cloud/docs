
export function removeBreaksAndDivs(content: string): string {
  return content
    // Remove <br /> (self-closing, with any spacing)
    .replace(/<br\s*\/>/gi, '')
    // Remove <div className="h-<number>" /> (self-closing, any spacing inside)
    .replace(/<div\s+className="h-\d+"\s*\/>/gi, '')
    .trim();
}
