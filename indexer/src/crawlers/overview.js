import path from 'node:path';
import fs from 'fs/promises';

import got from 'got';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

import URLS from '../utils/getUrl.js';
import { __dirname } from '../../constant.js';

const DATA = [];

async function crawlOverview() {
  for (const overview of URLS.overview) {
    const $ = cheerio.load((await got.get(overview)).body);

    const title = $('h1').text();
    const body = $('h1').nextAll().text();

    DATA.push({
      id: uuidv4(),
      url: overview,
      title,
      body,
      type: 'text',
    });

    $('section').each((i, section) => {
      const title = $(section).find('h2').text();
      const body = $(section).next('p').text();

      DATA.push({
        id: uuidv4(),
        url: overview,
        title,
        body,
        element: `#${$(section).find('h2').next('div').attr('id')}`,
        type: 'text',
      });
    });
  }

  return DATA;
}

export default crawlOverview;
