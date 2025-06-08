import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { OpenAI } from "openai";
import "dotenv/config";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0
});

// embedding model
const embeddingModel = new OpenAIEmbeddings({
  model: "text-embedding-3-small",
  apiKey: process.env.OPENAI_API_KEY,
});

export { llm, embeddingModel };