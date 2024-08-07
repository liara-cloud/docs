import path from 'node:path';
import fs from 'fs/promises';

import got from 'got';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

import URLS from '../utils/getUrl.js';
import { __dirname } from '../../constant.js';

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
      const title = $(section).find('h2').text();
      const body = $(section).nextUntil('section').text();

      const element = `#${$(section).find('h2').next('div').attr('id')}`;

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
