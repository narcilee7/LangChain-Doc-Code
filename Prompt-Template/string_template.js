import { PromptTemplate } from "@langchain/core/prompts";

const promptTemplate = PromptTemplate.fromTemplate(
  "Tell me a joke about {topic}"
);

const result = await promptTemplate.invoke({ topic: "cats" });
console.log(result);

/**
 * StringPromptValue {
  lc_serializable: true,
  lc_kwargs: { value: 'Tell me a joke about cats' },
  lc_namespace: [ 'langchain_core', 'prompt_values' ],
  value: 'Tell me a joke about cats'
  }
 */
