export function convertStep(content: string): string {
  return content.replace(/<Step\s+steps=\{\s*\[([\s\S]*?)\]\s*\}\s*\/>/gi, (_match, stepsStr) => {
    const stepRegex = /\{\s*step:\s*"([^"]+)"\s*,\s*content:\s*\(\s*<>\s*([\s\S]*?)\s*<\/>\s*\)\s*\}/g;
    const mdSteps: string[] = [];
    let match;
    while ((match = stepRegex.exec(stepsStr)) !== null) {
      const stepNum = match[1].trim();
      let stepContent = match[2].trim();

      // Remove leading ### if present in content
      stepContent = stepContent.replace(/^#{1,6}\s*/gm, '').trim();

      mdSteps.push(`${stepNum}. ${stepContent}`);
    }
    return mdSteps.join('\n\n');
  });
}
