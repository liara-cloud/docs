import { readFile } from "fs/promises";

import { client } from "../configs/meilisearchConnection.js";
import stopWords from "./stopWords.js";
import synonyms from "./synonyms.js";
import { synonymsParser } from "./synonymsParser.js";

export async function importDataToMeiliSearch(index, jsonName) {
  // read data
  const json = JSON.parse(await readFile(`./data/${jsonName}.json`));

  // parsing synonyms
  const synonymsList = synonymsParser(synonyms);

  await client.deleteIndexIfExists(index);
  await client.index(index).addDocuments(json);
  await client.index(index).updateStopWords(stopWords);
  await client.index(index).updateSynonyms(synonymsList);
  await client
    .index(index)
    .updateDisplayedAttributes(["id","platform", "title", "url", "element"]);
}
