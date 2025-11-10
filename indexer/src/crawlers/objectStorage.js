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
