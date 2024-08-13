import path from 'node:path';
import fs from 'fs/promises';

import got from 'got';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

import URLS from '../utils/getUrl.js';
import { __dirname } from '../../constant.js';

const DATA = [];

async function crawlObjectStorage() {
  for (const objectStorage of URLS.objectStorage) {
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
      const title = $(section).find('h2').text();
      const body = $(section).nextUntil('section').text();

      const element = `#${$(section).find('h2').next('div').attr('id')}`;

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
