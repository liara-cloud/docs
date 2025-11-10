import path from 'node:path';
import fs from 'fs/promises';

import got from 'got';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

import URLS from '../utils/getUrl.js';
import { __dirname } from '../../constant.js';
import delay from '../utils/delay.js';

const DATA = [];

const PLATFORMS = [
  'vue',
  'static',
  'react',
  'php',
  'nodejs',
  'nextjs',
  'laravel',
  'flask',
  'dotnet',
  'docker',
  'django',
  'angular',
];

async function crawlPaas() {
  for (const paas of URLS.paas) {
    await delay(4_500);

    const $ = cheerio.load((await got.get(paas)).body);

    const title = $('h1').text();
    const body = $('h1').nextAll().text();
    const platform = PLATFORMS.includes(paas.split('/')[4])
      ? paas.split('/')[4]
      : undefined;

    DATA.push({
      id: uuidv4(),
      url: paas,
      title,
      body,
      platform,
      type: 'text',
    });

    $('section').each((i, section) => {
      const h2 = $(section).find('h2');
      const title = h2.text();
      const body = $(section).nextUntil('section').text();

      // Try to get ID from h2 itself first, then from next div
      let element = h2.attr('id') ? `#${h2.attr('id')}` : `#${h2.next('div').attr('id')}`;

      if (element !== '#see-also' && element !== '#also-read' && element !== '#undefined') {
        DATA.push({
          id: uuidv4(),
          url: paas,
          title,
          body,
          element,
          platform,
          type: 'text',
        });

        if ($(section).next('video').length) {
          DATA.push({
            id: uuidv4(),
            url: paas,
            title,
            src: $(section).next('video').attr('src'),
            element,
            platform,
            type: 'video',
          });
        }
      }
    });

    // Also crawl h3 elements with IDs (for Section components)
    $('h3[id]').each((i, h3) => {
      const title = $(h3).text();
      const element = `#${$(h3).attr('id')}`;
      const body = $(h3).nextUntil('h2, h3, section').text();

      if (element !== '#see-also' && element !== '#also-read') {
        DATA.push({
          id: uuidv4(),
          url: paas,
          title,
          body,
          element,
          platform,
          type: 'text',
        });
      }
    });

    $('video').each((i, video) => {
      const src = $(video).attr('src');

      if (!DATA.some((obj) => obj.src === src)) {
        DATA.push({
          id: uuidv4(),
          url: paas,
          title,
          src,
          platform,
          type: 'video',
        });
      }
    });
  }

  return DATA;
}

export default crawlPaas;
