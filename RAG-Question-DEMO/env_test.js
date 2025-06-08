"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
console.log("👀 ENV:", (_a = process.env.OPENAI_API_KEY) === null || _a === void 0 ? void 0 : _a.slice(0, 10));
