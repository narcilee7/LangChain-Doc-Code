import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { docs } from "./pdf_parser.js";

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
})

const allSplits = await textSplitter.splitDocuments(docs);

// console.log("allSplits", allSplits);

export {
  allSplits
}