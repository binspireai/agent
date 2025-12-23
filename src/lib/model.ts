import { ChatOllama } from "@langchain/ollama";

export const model = new ChatOllama({
	model: "qwen2.5:0.5b",
	baseUrl: process.env.OLLAMA_BASE_URL,
});
