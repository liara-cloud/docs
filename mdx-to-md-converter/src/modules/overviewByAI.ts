// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

export async function overviewByAI(informal_md: string): Promise<string> {
  try {
    
    const baseURL = process.env.MY_BASE_URL;
    const apiKey = process.env.MY_API_KEY;

    if (!baseURL || !apiKey) {
      throw new Error('MY_BASE_URL and MY_API_KEY environment variables must be set');
    }

    const { text } = await generateText({
      model: createOpenAICompatible({
        name: 'liara-ai',
        baseURL,
        apiKey,
      }).chatModel("openai/gpt-4.1-mini"),
      prompt: `Convert the following incorrect Markdown content into standard Markdown. Do not rewrite, summarize, delete, add, or modify any content. Only remove or transform MDX elements into the valid Markdown.
Input MDX:

\n\n${informal_md}\n\n

Output the result as pure Markdown only, with no explanations or commentary.

considaring: 
- If you encounter links with a full path (starting with \`/\`), rewrite them so they begin with: https://docs.liara.ir
- If you encounter links with a relative path (starting with dot), DO NOT Change it
- Treat <Card /> as lists in the resulting Markdown and only link matters (not icons)
- Treat <Tab /> and their content as separated H2s. 

`,
    });

    return text;
  } catch (error) {
    console.error('Error in overviewByAI:', error);
    throw error;
  }
}
