import { ChatOpenAI } from "@langchain/openai";
import { OpenAI } from "openai";
import "dotenv/config";

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const model = new ChatOpenAI({ model: "gpt-4", openai });

export default model;