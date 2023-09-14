import fs from "node:fs";
import crypto from "crypto";
import OpenAI from "openai";

import VectorDatabase from "../services/VectorDatabase.js";
import { envConfig } from "../configs/envConfig.js";

const { OPENAI_ORGANIZATION, OPENAI_API_KEY } = envConfig;

export async function generateEmbeddings() {
  console.log("> generate embeddings...");

  const vector = new VectorDatabase();
  await vector.connect();

  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    organization: OPENAI_ORGANIZATION,
  });

  try {
    const sections = JSON.parse(await fs.readFileSync(`../data/docData.json`));

    console.log("> sections:", sections.length);

    let n = 0;
    for (const { title, body, url, platform } of sections) {
      n++;

      // OpenAI recommends replacing newlines with spaces for best results (specific to embeddings)
      const input = body.replace(/\n/g, " ");

      const checksum = crypto.createHash("md5").update(input).digest("hex");

      if (await vector.checksumExists(checksum)) {
        console.log(n, "checksum exists, skipping...");
        continue;
      }

      console.log(n, "generating embeddings...");

      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input,
      });

      await vector.insert({
        embedding: JSON.stringify(embeddingResponse.data[0].embedding),
        token_count: embeddingResponse.usage.total_tokens,
        slug: url,
        heading: title,
        content: body,
        platform,
        checksum,
      });
    }

    console.log("> generating embeddings finished.");
  } finally {
    await vector.disconnect();
  }
}
