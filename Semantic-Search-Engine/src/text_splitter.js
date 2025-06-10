"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSplits = void 0;
var textsplitters_1 = require("@langchain/textsplitters");
var pdf_parser_1 = require("./pdf_parser");
var textSplitter = new textsplitters_1.RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
});
var allSplits = await textSplitter.splitDocuments(pdf_parser_1.docs);
exports.allSplits = allSplits;
console.log("allSplits", allSplits);
