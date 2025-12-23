import { HumanMessage } from "@langchain/core/messages";
import { agent } from ".";

async function runAgent() {
	console.log("♻️  Binspire SWMS Agent Connected. Type 'exit' to quit.");

	const config = { configurable: { thread_id: "user-cli-session-1" } };

	while (true) {
		const userInput = prompt("\nUser > ");

		if (!userInput || userInput.toLowerCase() === "exit") {
			console.log("Goodbye!");
			process.exit();
		}

		const result = await agent.invoke(
			{ messages: [new HumanMessage(userInput)] },
			config,
		);

		const lastMessage = result.messages[result.messages.length - 1];

		console.log(`\nAgent > ${lastMessage?.content}`);
	}
}

runAgent().catch(console.error);
