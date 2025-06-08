import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";

const openAIApiKey = process.env.OPENAI_API_KEY;

// ✅ 加代理支持（axios）
const proxyConfig = {
  basePath: "https://api.openai.com/v1",
  axiosConfig: {
    proxy: false, // 关闭默认的 proxy 解析
    httpsAgent: new (await import("https-proxy-agent")).HttpsProxyAgent("http://127.0.0.1:7890"),
  },
};

const embeddings = new OpenAIEmbeddings({
  openAIApiKey,
  ...proxyConfig,
});

const llm = new ChatOpenAI({
  openAIApiKey,
  temperature: 0.3,
  ...proxyConfig,
});

export { llm, embeddings };