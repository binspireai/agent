import { Annotation, MessagesAnnotation } from "@langchain/langgraph";

export const MessagesState = Annotation.Root({
	...MessagesAnnotation.spec,
	llmCalls: Annotation<number>({
		reducer: (x, y) => x + y,
		default: () => 0,
	}),
});

export type MessagesStateType = typeof MessagesState.State;
