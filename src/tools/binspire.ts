import path from "node:path";
import { MultiServerMCPClient } from "@langchain/mcp-adapters";
import { model } from "@/lib/model";

const mcpServerPath = path.resolve(
	process.cwd(),
	"../binspire-mcp/dist/index.mjs",
);

const client = new MultiServerMCPClient({
	binspire: {
		transport: "stdio",
		command: "node",
		args: [mcpServerPath],
		env: process.env as Record<string, string>,
	},
});

const mcpTools = await client.getTools();

export const toolsByName = Object.fromEntries(
	mcpTools.map((tool) => [tool.name, tool]),
);

export const modelWithTools = model.bindTools(mcpTools);
