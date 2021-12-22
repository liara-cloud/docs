import { crawlingDocData } from "./util/crawlingDoc.js";
import { importDataToMeiliSearch } from "./util/importDataToMailisearch.js";

await crawlingDocData();
await importDataToMeiliSearch("docs", "docData");
