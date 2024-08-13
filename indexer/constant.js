import url from 'node:url';
import path from 'node:path';

export const BASE_URL = "https://docs.liara.run"

export const __dirname = path.dirname(url.fileURLToPath(import.meta.url));