import { Document } from '@langchain/core/documents';
const documents = [
    new Document({
        pageContent: "Dogs are great companions, known for their loyalty and friendliness.",
        metadata: { source: "mammal-pets-doc" },
    }),
    new Document({
        pageContent: "Cats are independent pets that often enjoy their own space.",
        metadata: { source: "mammal-pets-doc" },
    }),
];
export default documents;
