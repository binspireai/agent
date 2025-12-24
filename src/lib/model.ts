import { ChatOllama } from "@langchain/ollama";

export const model = new ChatOllama({
	model: "gpt-oss:120b",
	baseUrl: process.env.OLLAMA_BASE_URL,
	headers: {
		Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
	},
	streaming: true,
	think: true,
});
