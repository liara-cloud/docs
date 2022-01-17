import { writeFile } from 'fs/promises';

import { load } from 'cheerio';
import got from 'got';
import { v4 as uuidv4 } from 'uuid';

// data
const data = [];
const links = [];
const url = 'https://docs.liara.ir/';
// collect data
export async function crawlingDocData() {
  // Get all link
  const { body } = await got.get(url);
  const $ = load(body);
  $('a.nav__link').each(function (i, el) {
    links.push($(this).attr('href'));
  });

  await Promise.all(
    links.map(async (link) => {
      const { body } = await got.get(url + link);
      const $ = load(body);
      if (!$('h4').text()) {
        const platform = $('article .page-icon').attr('alt');
        if ($('article > h3').length) {
          $('article > h3,h4').each(function (i, el) {
            data.push({
              id: uuidv4(),
              url: link,
              platform,
              title: $(this).text(),
              body: $(this).nextUntil('h3').text(),
            });
          });
        } else {
          data.push({
            id: uuidv4(),
            url: link,
            platform,
            title:
              $('article .page-title > h1').text() || $('article > h1').text(),
            body: $('article').text(),
          });
        }
      }
      if ($('h4').next().is('ul') || $('h4').next().is('p')) {
        $('article > *').each(function (i, el) {
          if (typeof $(this).attr('id') != 'undefined') {
            const platform = $('article .page-icon').attr('alt');
            data.push({
              id: uuidv4(),
              url: link,
              platform,
              element: `#${$(this).attr('id')}`,
              title: $(this).text(),
              body: $(this).nextUntil('h3').text(),
            });
          }
        });
      }
    })
  );

  await writeFile('data/docData.json', JSON.stringify(data));
  return data;
}
