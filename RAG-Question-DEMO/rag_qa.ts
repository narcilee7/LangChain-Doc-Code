import { buildVectorStore } from "./init_vector_store.js";
import { llm } from "./init_model.js";
import { ChatPromptTemplate } from "@langchain/core/prompts";

// 向量存储
const vectorStore = await buildVectorStore();

// 提示词模板
const prompt = ChatPromptTemplate.fromTemplate(`
You are a helpful assistant for answering technical interview questions.
Use the following context to answer the question concisely.

Context:
{context}

Question: {question}
`);

export const answerQuestion = async (question: string) => {
  const docs = await vectorStore.similaritySearch(question, 3);
  const context = docs.map((doc) => doc.pageContent).join("\n");

  const messages = await prompt.formatMessages({ question, context });

  const response = await llm.invoke(messages);
  return response.content;
};
