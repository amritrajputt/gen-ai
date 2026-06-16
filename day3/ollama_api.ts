import express from "express";
import { Ollama } from "ollama";
import type { Request, Response } from "express";

const app = express();
const port = 3000;
const ollama = new Ollama({ host: "http://[::1]:11434" });

app.get("/chat", async (req: Request, res: Response) => {
  try {
    const response = await ollama.chat({
      model: "gemma:2b",
      messages: [{ role: "user", content: "hello " }],
      stream: true,
    });

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");

    for await (const chunk of response) {
      res.write(chunk.message.content);
    }
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interacting with Ollama");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
