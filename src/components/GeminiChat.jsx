import { Gemini } from '@lobehub/icons';

import { GoogleGenAI } from "@google/genai";
import { useState, useRef, useEffect } from "react";
import GEMINI from "../assets/gemini.svg";
import "./GeminiChat.css";

//dotenv.config();
//const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

fetch("InitialPrompt.txt")
    .then(response => response.text())
    .then(data => {
        const initialPrompt = data;
        //console.log("IT WORKED!" + data)
        conversation.push({role: "user", parts: [{ text: initialPrompt}]})
    })
    .catch(error => console.error("Error fetching the file:", error));
let conversation = [];
const GeminiChat = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("Hello! I'm Gemini, Eric's chatbot. Eric is a recent CS grad with stellar internships at Amazon (2x) and General Motors. He's already got offers for next year! Consider him for your open roles.");
    const [viewChat, setViewChat] = useState(false);
    const [viewLogo, setViewLogo] = useState(true);
    const [history, setHistory] = useState(["Gemini: " + response])
    const [isLoading, setIsLoading] = useState(false);
    const chatScrollRef = useRef(null)
    const inputRef = useRef(null);
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

    const main = async (e) => {
        e.preventDefault();
        const userMessage = prompt;
        conversation.push({ role: "user", parts: [{ text: userMessage}] });
        
        // Add user message immediately
        setHistory(prevHistory => [...prevHistory, "You: " + userMessage]);
        setPrompt("");
        setIsLoading(true);
        
        try {
            const AIresponse = await ai.models.generateContent({
              model: "gemini-2.0-flash",
              contents: conversation,
            });
            setResponse(AIresponse.text);
            setHistory(prevHistory => [...prevHistory, "Gemini: " + AIresponse.text]);
            conversation.push({ role: "model", parts: [{ text: AIresponse.text }] });
        } catch (error) {
            setHistory(prevHistory => [...prevHistory, "Gemini: Sorry, I encountered an error. Please try again."]);
        } finally {
            setIsLoading(false);
        }
      }
    useEffect(() => {
        if (chatScrollRef.current) {
          chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
        }
      }, [history]);

  useEffect(() => {
    inputRef.current.focus();
  }, [viewChat]);
return (
    <>
        <div className={`gemini-container ${viewChat ? "open": ""}`}>
            <button className='equis' onClick={() => {setViewChat(!viewChat); setViewLogo(!viewLogo) }}>X</button>
            <div className='chat-title'>
                <p>Eric's AI Assistant - Powered by {<img src = {GEMINI} alt='Gemini Logo'/>}</p>
 
            </div>
            <form onSubmit={main}>
                <input id='chat-input' type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ask anything, Ex: Why should I hire Eric?" ref={inputRef}/>
                <button type="submit">Send</button>
            </form>
            <div className="response" ref={chatScrollRef}>
                {history.map((message, index) => (<p key={index}>{message}</p>))}
                {isLoading && <p className="loading-message">Gemini: Thinking...</p>}
            </div>
        </div>
        <div className={`gemini-chat ${viewLogo ? "":"close"}`}>
            <Gemini.Avatar onClick={() => {setViewChat(!viewChat); setViewLogo(!viewLogo) }} size={100} className='avatar-gemini'/>
            <p onClick={() => {setViewChat(!viewChat); setViewLogo(!viewLogo) }} className='chat-text'>Chat with me!</p>
        </div>
    </>
)
}

export default GeminiChat;
