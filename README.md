<div align="center">

<img width="150" height="150" alt="Image" src="https://github.com/user-attachments/assets/9264c2c9-cacc-4024-9835-65cd4b99782d" />

# Binspire Agent

The Binspire Agent is an autonomous, LangGraph-orchestrated assistant designed to automate critical workflows within the Smart Waste Management System (SWMS). It serves as an intelligent bridge between the Binspire API and LLMs, enabling automated operational tasking, proactive issue resolution, and self-correcting data retrieval.

[![CI](https://img.shields.io/github/actions/workflow/status/binspireai/agent/ci.yml)](https://github.com/binspireai/agent/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/binspireai/agent)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/binspireai/agent)](https://github.com/binspireai/agent/stargazers)

</div>

## Contributing

We are committed to fostering a safe and inclusive open-source community.  
Please review and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) when contributing or participating in this project.

### Prerequisites

- Node.js >= 20.19 or nvm
- Bun latest runtime

### Bun Setup

Install Bun by following the official instructions: [Bun Installation Guide](https://bun.sh/docs/installation)

Or use the one-line installer:

```sh
$ curl -fsSL https://bun.com/install | bash
```

To check that Bun was installed successfully, open a new terminal window and run:

```sh
$ bun -version
```

### Clone the repository
```sh
git clone https://github.com/binspireai/mcp.git
cd mcp
```

### Install Dependencies

```sh
$ bun install
```

### Setup .env (environment variables)

Copy the example file to .env:

```sh
$ cp env.example .env
```

### Development Server

Run the development servers.

```sh
$ bun run dev
```

### Production Server

Run the production servers.

```sh
$ bun run start
```

### Running Build

```sh
$ bun run build
```

## Contributor List

<a href="https://github.com/binspireai/mcp/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=binspireai/mcp" />
</a>

## Code of Conduct

We are committed to fostering a welcoming, respectful community. Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) when participating in this project.

## Security

If you believe you have found a security vulnerability in Binspire MCP, please do not open a public issue on this repository. Opening a public issue could expose sensitive information before it's addressed. Please read our [Security Policy](./SECURITY.md) for details on how to report a vulnerability.

## License

Binspire Agent is licensed under [GPL-3.0](https://github.com/binspireai/mcp/blob/main/LICENSE).
