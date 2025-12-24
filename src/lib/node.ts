import {
	AIMessage,
	SystemMessage,
	type ToolMessage,
} from "@langchain/core/messages";
import { END } from "@langchain/langgraph";
import { modelWithTools, toolsByName } from "@/tools/binspire";
import { SYSTEM_PROMPT } from "./prompt";
import type { MessagesStateType } from "./state";

export async function llmCall(state: MessagesStateType) {
	const messages =
		state.messages.length === 0
			? [new SystemMessage(SYSTEM_PROMPT)]
			: state.messages;

	const response = await modelWithTools.invoke(messages);

	return {
		messages: [response],
	};
}

export async function toolNode(state: MessagesStateType) {
	const lastMessage = state.messages.at(-1);

	if (lastMessage == null || !AIMessage.isInstance(lastMessage)) {
		return { messages: [] };
	}

	const result: ToolMessage[] = [];

	for (const toolCall of lastMessage.tool_calls ?? []) {
		const tool = toolsByName[toolCall.name];

		if (!tool) {
			throw new Error(`Tool ${toolCall.name} not found`);
		}

		const observation = await tool.invoke(toolCall);
		result.push(observation);
	}

	return { messages: result };
}

export async function shouldContinue(state: MessagesStateType) {
	const lastMessage = state.messages.at(-1);

	if (!lastMessage || !AIMessage.isInstance(lastMessage)) {
		return END;
	}

	if (lastMessage.tool_calls?.length) {
		return "toolNode";
	}

	return END;
}
