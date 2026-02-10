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
      }).chatModel("google/gemini-2.0-flash-001"),
      prompt: `convert the text below to the pure markdown file, do not change any content on it:\n\n${informal_md}`,
    });

    return text;
  } catch (error) {
    console.error('Error in overviewByAI:', error);
    throw error;
  }
}
