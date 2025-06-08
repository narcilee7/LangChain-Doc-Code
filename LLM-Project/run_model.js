import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import model from "./model_init.js";

const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hi!"),
];

const invokeGPT = async () => {
  let result = null;
  try {
    result = await model.invoke(messages);
  } catch (error) {
    console.log(error);
  }
  return result;
};

// console.log(result);
const { content } = await invokeGPT();
console.log(content);