# Prompt Template

- 提示模板有助于将用户输入和参数转换为语言模型的说明。这可用于指导模型的响应，帮助它理解上下文并生成相关且连贯的基于语言的输出。
- 将一个对象作为输入，其中每个键代表 Prompt 模板中要填写的变量。
- 提示模板输出 PromptValue。此 PromptValue 可以传递给 LLM 或 ChatModel，也可以转换为字符串或消息列表。此 PromptValue 存在的原因是为了便于在字符串和消息之间切换。

有几种不同类型的提示模板：
1. String PromptTemplate
2. Chat PromptTemplate
3. Message PlaceHolder