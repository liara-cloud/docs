import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const CATEGORIES = [
  "deepseek",
  "google",
  "meta-llama",
  "anthropic",
  "openai",
  "x-ai",
  "mistralai",
  "perplexity",
  "qwen",
  "moonshotai",
  "z-ai"
];

function categorizeModel(modelId) {
  for (const prefix of CATEGORIES) {
    if (modelId.startsWith(prefix + "/")) {
      return prefix;
    }
  }
  return "other";
}

async function main() {
  try {
    const res = await fetch("https://ai.liara.ir/v1/models", {
      headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();

    const categorized = {};

    [...CATEGORIES, "other"].forEach((key) => {
      categorized[key] = [];
    });

    data.models.forEach((m) => {
      const category = categorizeModel(m.id);
      categorized[category].push(m.id);
    });

    const outputPath = path.join(process.cwd(), "src", "data", "liara-ai-models.json");

    const dirPath = path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(categorized, null, 2));

    console.log("liara-ai-models.json generated successfully!");
  } catch (error) {
    console.error("Error while fetching or writing model data:", error);
    process.exit(1);
  }
}

main();
