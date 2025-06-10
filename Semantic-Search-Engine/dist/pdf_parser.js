import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const loader = new PDFLoader(join(__dirname, '../data/nke-10k-2023.pdf'));
const docs = await loader.load();
console.log(docs.length);
export { docs };
