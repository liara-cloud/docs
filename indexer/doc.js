import { crawlingDocData } from "./util/crawlingDoc.js";
import { importDataToMeiliSearch } from "./util/importDataToMailisearch.js";
import { generateEmbeddings } from "./util/generateEmbeddings.js";

await crawlingDocData();
await importDataToMeiliSearch("docs", "docData");
// await generateEmbeddings();
