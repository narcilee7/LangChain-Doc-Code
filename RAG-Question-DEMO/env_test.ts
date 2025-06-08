import "dotenv/config";

console.log("👀 ENV:", process.env.OPENAI_API_KEY?.slice(0, 10));
