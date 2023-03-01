import { MeiliSearch } from "meilisearch";

import { envConfig } from "./envConfig.js";

export const client = new MeiliSearch({
  host: envConfig.MEILI_ROOT_URL,
  apiKey: envConfig.MEILI_PRIVATE_KEY,
});
