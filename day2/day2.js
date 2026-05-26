import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";
import dotenv from "dotenv";
dotenv.config({path : "../.env"});

const ai = new GoogleGenAI({
    apiKey:process.env.API_KEY,
});
async function main() {
    const chat = ai.chats.create({
    model:"gemini-2.5-flash",
   history:[],
   config:{
    systemInstruction:`you are a coding buddy
    you have to only answer of the questions related to coding 
    if any one ask other than coding you have to talk to them rudely`
   }
});

    // const response = await chat.sendMessage({ message: "what is avl tree in 50 words?" });
    // console.log(response.text);

    // to take input from terminal
    while(true){
        const question = readlineSync.question("Ask Question : ");
        const response = await chat.sendMessage({ message: question });
        console.log("Gemini : " + response.text);
        if(question === "quit"){
            break;
        }
    }
}
main();