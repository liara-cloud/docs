export function removeQuestionBox(content: string): string {
  return content.replace(/<QuestionBox[\s\S]*?\/>/gi, '');
}
