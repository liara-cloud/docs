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
      const heading = $(section).find('h2, h3, h4, h5, h6').first();
      const title = heading.text();
      const body = $(section).next('p').text();
      
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
