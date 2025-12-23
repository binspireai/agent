import { MessagesAnnotation, Annotation } from "@langchain/langgraph";

export const MessagesState = Annotation.Root({
  ...MessagesAnnotation.spec,

  loopCount: Annotation<number>({
    reducer: (x, y) => x + y,
    default: () => 0,
  }),

  focusedId: Annotation<string | null>({
    reducer: (existing, update) => update ?? existing,
    default: () => null,
  }),

  lastActionSummary: Annotation<string>({
    reducer: (existing, update) => update,
    default: () => "Idle",
  }),
});

export type MessagesStateType = typeof MessagesState.State;
