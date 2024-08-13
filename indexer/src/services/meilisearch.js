import { MeiliSearch } from 'meilisearch';

export const MeiliSearchClient = new MeiliSearch({
  host: process.env.MEILI_ROOT_URL,
  apiKey: process.env.MEILI_PRIVATE_KEY,
});
