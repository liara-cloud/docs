import path from 'node:path';
import fs from 'fs/promises';

import got from 'got';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

import URLS from '../utils/getUrl.js';
import { __dirname } from '../../constant.js';
import delay from '../utils/delay.js';

const DATA = [];

const MODELS = [
  'openai',
  'google-gemini',
  'grok-x-ai',
  'deepseek',
  'anthropic-claude',
  'meta-llama',
  'mistral-nemo',
  'perplexity',
  'qwen',
];

async function crawlAi() {
  for (const ai of URLS.ai) {
    await delay(4_500);

    const $ = cheerio.load((await got.get(ai)).body);

    const title = $('h1').text();
    const body = $('h1').nextAll().text();
    const model = MODELS.includes(ai.split('/')[4])
      ? ai.split('/')[4]
      : undefined;

    DATA.push({
      id: uuidv4(),
      url: ai,
      title,
      body,
      model,
      type: 'text',
    });

    $('section').each((i, section) => {
      const heading = $(section).find('h2, h3, h4, h5, h6').first();
      const title = heading.text();
      const body = $(section).nextUntil('section').text();

      // Get ID from the div that follows the heading (Section component pattern)
      let element = heading.next('div').attr('id');
      
      // If no div with ID, try the heading itself
      if (!element) {
        element = heading.attr('id');
      }
      
      // Add # prefix if we found an ID
      if (element) {
        element = `#${element}`;
      }

      if (element && element !== '#see-also' && element !== '#also-read' && element !== '#undefined' && element !== '#section-title') {
        DATA.push({
          id: uuidv4(),
          url: ai,
          title,
          body,
          element,
          model,
          type: 'text',
        });

        if ($(section).next('video').length) {
          DATA.push({
            id: uuidv4(),
            url: ai,
            title,
            src: $(section).next('video').attr('src'),
            element,
            model,
            type: 'video',
          });
        }
      }
    });

    $('video').each((i, video) => {
      const src = $(video).attr('src');

      if (!DATA.some((obj) => obj.src === src)) {
        DATA.push({
          id: uuidv4(),
          url: ai,
          title,
          src,
          model,
          type: 'video',
        });
      }
    });
  }

  return DATA;
}

export default crawlAi;
