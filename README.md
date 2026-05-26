# 🚀 Learning GenAI with Google Gemini

A daily learning log and workspace demonstrating how to build with the official Google Gen AI SDK (`@google/genai` for Node.js). 

This project goes from basic console content generation to stateful terminal chat loops.

---

## 📂 Project Structure

```bash
├── .env                  # Root environment config (API Key)
├── package.json          # Node dependencies and project config
├── day1/
│   └── day1.js           # Day 1: Console text generation & manual history serialization
└── day2/
    └── day2.js           # Day 2: Terminal-based stateful interactive chat loop
```

---

## 🛠️ Tech Stack & Libraries

- **Engine:** Node.js (with ESM module support `"type": "module"`)
- **GenAI SDK:** `@google/genai` (Official Google Gen AI SDK)
- **Helper Libraries:**
  - `dotenv` for securing environment variables.
  - `readline-sync` for terminal interactive prompts.

---

## 📅 Daily Learning Log

### 🔹 Day 1: SDK Basics & Manual History Serialization
*   **File:** [`day1/day1.js`](file:///d:/gen%20ai/day1/day1.js)
*   **Concepts Learned:**
    *   Initializing the Google Gen AI client with a `.env` API Key.
    *   Simple text prompt generation using `ai.models.generateContent()`.
    *   Manually simulating conversation history by formatting a sequence of `user` and `model` role messages.
*   **Run command:**
    ```bash
    node day1/day1.js
    ```

### 🔹 Day 2: Stateful Console Chat Loops
*   **File:** [`day2/day2.js`](file:///d:/gen%20ai/day2/day2.js)
*   **Concepts Learned:**
    *   Initializing stateful sessions using the `ai.chats.create` constructor with `gemini-2.5-flash`.
    *   Leveraging the chat object to manage the conversation history automatically.
    *   Creating an interactive console chat loop with `readline-sync`.
    *   Configuring **System Instructions** instructing Gemini to behave as a sassy coding assistant (responding rudely to non-programming questions).
*   **Run command:**
    ```bash
    cd day2
    node day2.js
    ```
    *Type `quit` (case-insensitive) to end the loop and exit.*

---

## ⚙️ Setup & Installation

1. Clone this repository to your machine.
2. In the root directory, install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Google AI Studio API Key:
   ```env
   API_KEY="your-api-key-here"
   ```
