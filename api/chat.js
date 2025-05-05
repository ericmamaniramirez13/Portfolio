// api/chat.js
import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  console.log("1", req.body, req.method)
  console.log("2",res.body)
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const prompt = req.body;
  console.log("THIS IS PROMPT: ", prompt)
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  try {
    const conversation = [{ role: "user", parts: [{ text: prompt }] }];
    const AIresponse = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });
    console.log(AIresponse.text)
    res.status(200).json({ text: AIresponse.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate response" });
  }
}
