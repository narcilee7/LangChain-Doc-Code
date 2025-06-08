// ✅ 必须第一行
import "dotenv/config";

import readline from "readline";
import { answerQuestion } from "./rag_qa.js";

console.log("✅ ENV KEY:", !!process.env.OPENAI_API_KEY); // 加这一行测试

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("请输入一个八股文面试题：", async (q) => {
  const res = await answerQuestion(q);
  console.log("\n📘 答案：\n" + res);
  rl.close();
});
