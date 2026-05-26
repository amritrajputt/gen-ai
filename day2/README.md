# 💬 Day 2 & 3: Stateful Gemini Chat Applications

This folder contains two implementations of a stateful chatbot using the official `@google/genai` SDK:
1. A **Terminal-based interactive chat** (`day2.js`).
2. A **Browser-based styled chat** with a secure local server proxy (`server.js` + `index.html` + `day3.js`).

---

## 🛠️ Folder Contents

*   **`day2.js`**: A terminal-based chatbot loop that uses `readline-sync` to take user inputs directly in your console.
*   **`server.js`**: A backend Node.js server built with the native `http` module that hosts the web assets and securely forwards API requests to Google Gemini.
*   **`day3.js`**: The browser client script that manages UI interactions, makes `fetch` requests to `/api/chat`, and updates the chat bubble log.
*   **`index.html`**: A premium, responsive dark-themed user interface featuring glassmorphic effects, outfit typography, and custom code syntax highlighting styles.
*   **`test-gemini.js`**: A developer troubleshooting script used to check your Gemini API connection and rate limits.
*   **`.env`**: Store your active `GEMINI_API_KEY` here.

---

## ⚙️ Setup & Configuration

1. Make sure you have a `.env` file inside this `day2` directory containing your active Gemini API key:
    ```env
    GEMINI_API_KEY="your-api-key-here"
    ```

2. Make sure you have installed the required Node modules in the root folder:
    ```bash
    npm install
    ```

---

## 🚀 How to Run the Applications

### 1. Terminal Chatbot (`day2.js`)
Runs inside your command line window:
```bash
node day2.js
```
*Type `quit` to exit the loop and close the chat.*

### 2. Browser Chatbot (Web App)
Runs as a secure webpage:
1. Start the local server:
    ```bash
    node server.js
    ```
2. Open your web browser and navigate to:
    👉 **[http://localhost:3000](http://localhost:3000)**

---

## 💡 Features Included
*   **System Instructions:** Gemini is configured to be a helpful programming assistant but will respond sassily/rudely if you ask non-coding questions.
*   **Markdown Support:** The web app compiles markdown syntax in Gemini's responses into formatted HTML using `marked.js` so you see clean headings, lists, bold text, and code blocks.
*   **Error Exposer:** If the Gemini API returns a rate limit (429) or other errors, it is displayed nicely in the chat container so you know exactly what is happening.
