import path from 'node:path';
import fs from 'fs/promises';

import got from 'got';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

import URLS from '../utils/getUrl.js';
import { __dirname } from '../../constant.js';
import delay from '../utils/delay.js';

const DATA = [];

async function crawlOneClickApp() {
  for (const oneClickApp of URLS.oneClickApp) {
    await delay(4_500);

    const $ = cheerio.load((await got.get(oneClickApp)).body);

    const title = $('h1').text();
    const body = $('h1').nextAll().text();
    const platform =
      oneClickApp.split('/')[4] !== 'about'
        ? oneClickApp.split('/')[4]
        : undefined;

    DATA.push({
      id: uuidv4(),
      url: oneClickApp,
      title,
      body,
      platform,
      type: 'text',
    });

    $('section').each((i, section) => {
      const h2 = $(section).find('h2');
      const title = h2.text();
      const body = $(section).next('p').text();
      
      // Try to get ID from h2 itself first, then from next div
      let element = h2.attr('id') ? `#${h2.attr('id')}` : `#${h2.next('div').attr('id')}`;

      if (element !== '#see-also' && element !== '#also-read' && element !== '#undefined') {
        DATA.push({
          id: uuidv4(),
          url: oneClickApp,
          title,
          body,
          element,
          platform,
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
          url: oneClickApp,
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

      const previousHeading = $(video)
        .prevAll('h1, h2, h3, h4, h5, h6')
        .first()
        .text();

      DATA.push({
        id: uuidv4(),
        url: oneClickApp,
        title: previousHeading,
        src,
        platform,
        type: 'video',
      });
    });
  }

  return DATA;
}

export default crawlOneClickApp;
