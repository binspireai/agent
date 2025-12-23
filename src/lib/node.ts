import { SystemMessage } from "@langchain/core/messages";
import type { MessagesStateType } from "./state";
import { modelWithTools, toolsByName } from "@/tools/binspire";
import { AIMessage, ToolMessage } from "@langchain/core/messages";
import { END } from "@langchain/langgraph";
import { SYSTEM_PROMPT } from "./prompt";

export async function llmCall(state: MessagesStateType) {
  if (state.loopCount > 5) {
    return {
      messages: [
        new AIMessage(
          "I've reached my operational limit for this request. Please try a different query.",
        ),
      ],
      loopCount: 0,
    };
  }

  const response = await modelWithTools.invoke([
    new SystemMessage(SYSTEM_PROMPT),
    ...state.messages,
  ]);

  return {
    messages: [response],
    loopCount: 1,
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
