import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { HumanMessage } from "@langchain/core/messages";

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant"],
  new MessagesPlaceholder("msgs"),
]);

const result = await promptTemplate.invoke({ msgs: [new HumanMessage("hi!")] });

console.log(result);

/**
ChatPromptValue {
  lc_serializable: true,
  lc_kwargs: {
    messages: [
      SystemMessage {
        "content": "You are a helpful assistant",
        "additional_kwargs": {},
        "response_metadata": {}
      },
      HumanMessage {
        "content": "hi!",
        "additional_kwargs": {},
        "response_metadata": {}
      }
    ]
  },
  lc_namespace: [ 'langchain_core', 'prompt_values' ],
  messages: [
    SystemMessage {
      "content": "You are a helpful assistant",
      "additional_kwargs": {},
      "response_metadata": {}
    },
    HumanMessage {
      "content": "hi!",
      "additional_kwargs": {},
      "response_metadata": {}
    }
  ]
}
 */
