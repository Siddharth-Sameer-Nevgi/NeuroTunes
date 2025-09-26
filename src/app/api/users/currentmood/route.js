import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Give the mood in one word (like Happy, Sad, Angry, Excited, Neutral) and the genre of songs i should be listening to in one word. Format should be "mood,genre" 
              Text: "${message}"`
            }
          ]
        }
      ]
    });

    let raw = response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "Unknown,Unknown";

    const [mood, genre] = raw.split(",").map((s) => s.trim());

    return NextResponse.json({ mood, genre });
  } catch (err) {
    console.error("API Route Error:", err);
    return NextResponse.json({ error: "Failed to analyze mood" }, { status: 500 });
  }
}
