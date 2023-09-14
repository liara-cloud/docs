import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const envConfig = {
  MEILI_ROOT_URL: process.env.MEILI_ROOT_URL,
  MEILI_PRIVATE_KEY: process.env.MEILI_PRIVATE_KEY,

  POSTGRES_URL: process.env.POSTGRES_URL,

  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  OPENAI_ORGANIZATION: process.env.OPENAI_ORGANIZATION,
};
