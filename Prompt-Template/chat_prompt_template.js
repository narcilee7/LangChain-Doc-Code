import { ChatPromptTemplate } from "@langchain/core/prompts";

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant"],
  ["user", "Tell me a joke about {topic}"],
]);

const reuslt = await promptTemplate.invoke({ topic: "cats" });

console.log(reuslt);

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
        "content": "Tell me a joke about cats",
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
      "content": "Tell me a joke about cats",
      "additional_kwargs": {},
      "response_metadata": {}
    }
  ]
}

 */