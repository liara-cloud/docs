import path from 'node:path';
import fs from 'fs/promises';

import got from 'got';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

import URLS from '../utils/getUrl.js';
import { __dirname } from '../../constant.js';
import delay from '../utils/delay.js';

const DATA = [];

const OPERATING_SYSTEMS = [
  'ubuntu',
  'debian',
];

async function crawlIaas() {
  for (const iaas of URLS.iaas) {
    await delay(4_500);

    const $ = cheerio.load((await got.get(iaas)).body);

    const title = $('h1').text();
    const body = $('h1').nextAll().text();
    const operating_system = OPERATING_SYSTEMS.includes(iaas.split('/')[4])
      ? iaas.split('/')[4]
      : undefined;

    DATA.push({
      id: uuidv4(),
      url: iaas,
      title,
      body,
      operating_system,
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
          url: iaas,
          title,
          body,
          element,
          operating_system,
          type: 'text',
        });

        if ($(section).next('video').length) {
          DATA.push({
            id: uuidv4(),
            url: iaas,
            title,
            src: $(section).next('video').attr('src'),
            element,
            operating_system,
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
          url: iaas,
          title,
          src,
          operating_system,
          type: 'video',
        });
      }
    });
  }

  return DATA;
}

export default crawlIaas;
