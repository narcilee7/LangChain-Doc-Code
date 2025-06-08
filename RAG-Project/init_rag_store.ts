import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { embeddingModel } from "./init_model";

const vectorStore = new MemoryVectorStore(embeddingModel);

export default vectorStore;