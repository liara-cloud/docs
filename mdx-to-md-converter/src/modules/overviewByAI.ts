import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
dotenv.config({ path: path.join(__dirname, '../..', '.env') });
dotenv.config({ path: path.join(__dirname, '../../..', '.env') });

const MAX_CHUNK_SIZE = 50000; 

function splitIntoChunks(content: string, maxSize: number): string[] {
  if (content.length <= maxSize) {
    return [content];
  }

  const chunks: string[] = [];
  let currentChunk = '';
  const lines = content.split('\n');

  for (const line of lines) {
    if ((currentChunk + line + '\n').length > maxSize && currentChunk.length > 0) {
      chunks.push(currentChunk);
      currentChunk = line + '\n';
    } else {
      currentChunk += line + '\n';
    }
  }

  if (currentChunk.length > 0) {
    chunks.push(currentChunk);
  }

  return chunks;
}


async function processChunk(chunk: string, baseURL: string, apiKey: string, chunkIndex: number, totalChunks: number): Promise<string> {
  const basePrompt = `Convert the following incorrect Markdown content into standard Markdown. Do not rewrite, summarize, delete, add, or modify any content. Only remove or transform MDX elements into the valid Markdown.

considaring: 
- If you encounter links with a full path (starting with \`/\`), rewrite them so they begin with: https://docs.liara.ir
- If you encounter links with a relative path (starting with dot), DO NOT Change it
- Treat <Card /> as lists in the resulting Markdown and only link matters (not icons)
- Treat <Tab /> and their content as separated H2s.`;

  const prompt = totalChunks > 1
    ? `${basePrompt}\n\nThis is part ${chunkIndex + 1} of ${totalChunks}:\n\nInput MDX:\n\n${chunk}\n\nOutput the result as pure Markdown only, with no explanations or commentary.`
    : `${basePrompt}\n\nInput MDX:\n\n${chunk}\n\nOutput the result as pure Markdown only, with no explanations or commentary.`;

  const { text } = await generateText({
    model: createOpenAICompatible({
      name: 'liara-ai',
      baseURL,
      apiKey,
    }).chatModel("openai/gpt-4.1-mini"),
    prompt,
  });

  return text;
}

export type AIResultStatus = 'SUCCESS' | 'SKIPPED' | 'FAILED';

export interface AIResult {
  status: AIResultStatus;
  text: string;
}

export async function overviewByAI(informal_md: string): Promise<AIResult> {
  const baseURL = process.env.MY_BASE_URL;
  const apiKey = process.env.MY_API_KEY;

  if (!baseURL || !apiKey) {
    console.warn('AI disabled/unavailable: MY_BASE_URL or MY_API_KEY not set; skipping AI conversion');
    return { status: 'SKIPPED', text: '' };
  }

  try {
    const chunks = splitIntoChunks(informal_md, MAX_CHUNK_SIZE);

    if (chunks.length > 1) {
      console.log(`Content split into ${chunks.length} chunks`);
    }

    const processedChunks: string[] = [];
    for (let i = 0; i < chunks.length; i++) {
      try {
        if (chunks.length > 1) {
          console.log(`Processing chunk ${i + 1}/${chunks.length}...`);
        }

        const processed = await processChunk(chunks[i], baseURL, apiKey, i, chunks.length);
        processedChunks.push(processed);

        if (i < chunks.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } catch (chunkError: any) {
        console.error(`Error processing chunk ${i + 1}/${chunks.length}:`, chunkError.message);
        return { status: 'FAILED', text: '' };
      }
    }

    const text = processedChunks.join('\n\n').trim();
    if (text.length < 50) {
      return { status: 'FAILED', text: '' };
    }
    return { status: 'SUCCESS', text };
  } catch (error: any) {
    console.error('Error in overviewByAI:', error.message || error);
    return { status: 'FAILED', text: '' };
  }
}
