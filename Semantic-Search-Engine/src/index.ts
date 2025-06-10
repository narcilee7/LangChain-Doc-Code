import { OpenAIEmbeddings } from "@langchain/openai";
import { allSplits } from "./text_splitter.js";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import "dotenv/config";

const embeddings = new OpenAIEmbeddings({
  model: 'text-embedding-3-large',
  openAIApiKey: process.env.MOONSHOT_API_KEY
});

const vector1 = await embeddings.embedQuery(allSplits[0].pageContent);

const vector2 = await embeddings.embedQuery(allSplits[1].pageContent);

console.assert(vector1.length === vector2.length);

console.log(`Generated vectors of length ${vector1.length}\n`);
console.log("vector1 slice ", vector1.slice(0, 10));

const vectorStore = new MemoryVectorStore(embeddings);

// 为文档编制索引
await vectorStore.addDocuments(allSplits); 

const results1 = await vectorStore.similaritySearch(
  "When was Nike incorporated"
);

console.log('results1', results1[0]);

const results2 = await vectorStore.similaritySearchWithScore(
  "What was Nike's revenue in 2023?"
);

console.log('result2', results2[0]);

const embedding = await embeddings.embedQuery(
  "How were Nike's margins impacted in 2023?"
);

const results3 = await vectorStore.similaritySearchWithScore(
  embedding.toString(),
  1
);

console.log('result3', results3[0]);

// as检索器
const retriever = vectorStore.asRetriever({
  searchType: 'mmr',
  searchKwargs: {
    fetchK: 1,
  }
});

const runRetriever = async () => {
  return await retriever.batch([
    "When was Nike incorporated",
    "What was Nike's revenue in 2023"
  ]);
};

console.log(await runRetriever);