import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config({path : "../.env"});

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "what is my name?",
  });
  console.log(response.text);
}

async function storeHistory (){
    const res =  await ai.models.generateContent({
        model :"gemini-2.5-flash",
        contents :[
            {
                role:"user",
                parts : [
                    {text : "what is my name?"}
                ]
            },
            {
                role:"model",
                parts:[{
                    text:"I don't know your name yet! Since I don't have access to your personal information, you'll have to tell me. What is your name?"
                }]
            },
            {
                role : "user",
                parts :[{text : "My name is Amrit"}]
            },
            {
                role:"model",
                parts:[{
                    text: "Nice to meet you, Amrit! How can I help you today?"
                }]
            },
            {
                role:"user",
                parts:[
                    {
                        text: "what is my name now?"
                    }
                ]
            }
        ]
    })
    console.log(res.text);
}



await main();
await storeHistory();