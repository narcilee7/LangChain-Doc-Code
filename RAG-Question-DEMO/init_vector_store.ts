import fs from "fs";
import path from "path";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Document } from "@langchain/core/documents";

const dataDir = path.resolve("data");

export const buildVectorStore = async () => {
  const files = fs.readdirSync(dataDir);
  const docs: Document[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(dataDir, file), "utf-8");
    docs.push(new Document({ pageContent: content, metadata: { source: file } }));
  }
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });

  const splitDocs = await splitter.splitDocuments(docs);

  const vectorStore = await MemoryVectorStore.fromDocuments(
    splitDocs,
    new OpenAIEmbeddings()
  );

  return vectorStore;
};