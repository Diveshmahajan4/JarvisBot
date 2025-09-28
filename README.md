# Jarvis AI Voice Automation Tools

Jarvis is an AI-powered voice automation tool designed to simplify blockchain transactions. With Jarvis, users can **check transfer history, send transactions, and access blockchain utilities** — all through natural voice commands.

By integrating voice automation with blockchain, Jarvis enhances usability, saves **gas fees**, and provides seamless interaction across multiple decentralized platforms.

---

## ✨ Features

* 🎙️ **AI Voice Assistant** – Perform blockchain actions via natural voice commands.
* 🔗 **Multi-Chain Transactions** – Supports deployment and interactions on various blockchains.
* 📜 **Smart Contract Management** – Deploy and execute smart contracts with ease.
* 💸 **Gas Fee Optimization** – Intelligent routing to minimize transaction costs.
* 📂 **Decentralized Storage** – Integrated with Filecoin for secure and distributed data storage.
* 📊 **Transfer History Checker** – Instantly retrieve and analyze wallet transaction history.
* 🧠 **LangChain Integration** – Enhanced AI-driven conversational workflows.
* ⚡ **FastAPI MCP Server** – High-performance server implementing Model Context Protocol (MCP) for AI + blockchain orchestration.

---

## 🤝 Sponsors & Integrations

1. **Flow.com** – Blockchain sponsor providing infrastructure support.
2. **RootStock (RSK)** – For deploying and managing smart contracts.
3. **Filecoin** – Used for decentralized storage and smart contract data handling.

---

## 🛠️ Tech Stack

* **Smart Contracts**: Solidity
* **Frontend**: React.js
* **Backend APIs**: Node.js, FastAPI MCP Server
* **AI & Automation**: Python, PyAutoGUI, LangChain
* **Blockchain Dev Environment**: Hardhat
* **Voice AI Processing**: Python-based voice recognition + MCP integration

---

## 🚀 Getting Started

### Prerequisites

* Node.js v18+
* Python 3.9+
* Hardhat CLI
* MetaMask or Web3 Wallet

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/jarvis-ai-voice-automation.git
cd jarvis-ai-voice-automation

# Install backend dependencies (Node.js)
cd backend
npm install

# Install frontend dependencies (React)
cd ../frontend
npm install

# Setup Python environment (FastAPI MCP + AI)
pip install -r requirements.txt
```

---

## ⚙️ Usage

1. **Start Node.js Backend**

   ```bash
   cd backend
   npm run dev
   ```

2. **Start FastAPI MCP Server**

   ```bash
   cd ai
   uvicorn mcp_server:app --reload --port 8000
   ```

3. **Start Frontend**

   ```bash
   cd frontend
   npm start
   ```

4. **Activate Voice Assistant**

   ```bash
   python voice_assistant.py
   ```

---

## 📦 Project Structure

```
├── backend/              # Node.js + Hardhat backend
│   ├── contracts/        # Solidity smart contracts
│   ├── routes/           # API routes
│   └── utils/            # Blockchain interaction utils
├── frontend/             # React-based UI
│   ├── components/       
│   └── pages/            
├── ai/                   # Python + LangChain + FastAPI MCP server
│   ├── mcp_server.py     # FastAPI MCP entry point
│   ├── voice_assistant.py
│   └── automation.py
└── README.md
```

---

## 🔮 Future Scope

* Integration with more blockchains (Ethereum, Polygon, Solana).
* Enhanced AI capabilities for predictive gas fee optimization.
* Multi-language voice command support.
* Cross-platform mobile app integration.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Contributors

* **Your Team / Organization**
* Community Developers

---
