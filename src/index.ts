import { END, MemorySaver, START, StateGraph } from "@langchain/langgraph";
import { llmCall, shouldContinue, toolNode } from "./lib/node";
import { MessagesState } from "./lib/state";

const checkpointer = new MemorySaver();
const agent = new StateGraph(MessagesState)
	.addNode("llmCall", llmCall)
	.addNode("toolNode", toolNode)
	.addEdge(START, "llmCall")
	.addConditionalEdges("llmCall", shouldContinue, ["toolNode", END])
	.addEdge("toolNode", "llmCall")
	.compile({ checkpointer });

export { agent };
