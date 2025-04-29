// import path from 'node:path';
// import fs from 'node:fs/promises';

import { __dirname } from '../constant.js';
import synonyms from './utils/synonyms.js';
import stopWords from './utils/stopWords.js';
import { MeiliSearchClient } from './services/meilisearch.js';

import crawlDns from './crawlers/dns.js';
import crawlMail from './crawlers/mail.js';
import crawlPaas from './crawlers/paas.js';
import crawlDbaas from './crawlers/dbaas.js';
import crawlOverview from './crawlers/overview.js';
import crawlReference from './crawlers/reference.js';
import crawlOneClickApp from './crawlers/oneClickApp.js';
import crawlObjectStorage from './crawlers/objectStorage.js';
import delay from './utils/delay.js';

const crawlers = [
  crawlDns,
  crawlMail,
  crawlPaas,
  crawlDbaas,
  crawlOverview,
  crawlReference,
  crawlOneClickApp,
  crawlObjectStorage,
];

async function runIndexer() {
  const data = [];

  for (const crawler of crawlers) {
    data.push(await crawler());
    await delay(5_000);
  }

  // Development
  // await fs.writeFile(
  //   path.join(__dirname, 'data/crawl-doc-data.json'),
  //   JSON.stringify(data)
  // );

  await MeiliSearchClient.deleteIndexIfExists('docs');
  await MeiliSearchClient.index('docs').addDocuments(data.flat());
  await MeiliSearchClient.index('docs').updateSynonyms(synonyms);
  await MeiliSearchClient.index('docs').updateStopWords(stopWords);

  await MeiliSearchClient.index('docs').updateDisplayedAttributes([
    'id',
    'platform',
    'title',
    'url',
    'element',
    'src',
    'type'
  ]);
}

runIndexer().catch(console.error);
