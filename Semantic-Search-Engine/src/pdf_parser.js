"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docs = void 0;
var pdf_1 = require("@langchain/community/document_loaders/fs/pdf");
var loader = new pdf_1.PDFLoader('../data/nke-10k-2023.pdf');
var docs = await loader.load();
exports.docs = docs;
console.log(docs.length);
