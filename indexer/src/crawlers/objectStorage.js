import path from 'node:path';
import fs from 'fs/promises';

import got from 'got';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

import URLS from '../utils/getUrl.js';
import { __dirname } from '../../constant.js';
import delay from '../utils/delay.js';

const DATA = [];

async function crawlObjectStorage() {
  for (const objectStorage of URLS.objectStorage) {
    await delay();

    const $ = cheerio.load((await got.get(objectStorage)).body);

    const title = $('h1').text();
    const body = $('h1').nextAll().text();

    DATA.push({
      id: uuidv4(),
      url: objectStorage,
      title,
      body,
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
          url: objectStorage,
          title,
          body,
          element,
          type: 'text',
        });
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
          url: objectStorage,
          title,
          body,
          element,
          type: 'text',
        });
      }
    });

    $('video').each((i, video) => {
      const src = $(video).attr('src');

      if (!DATA.some((obj) => obj.src === src)) {
        DATA.push({
          id: uuidv4(),
          url: objectStorage,
          title,
          src,
          type: 'video',
        });
      }
    });
  }

  return DATA;
}

export default crawlObjectStorage;
