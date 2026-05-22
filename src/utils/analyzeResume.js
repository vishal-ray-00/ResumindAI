const analyzeResume = async (resumeText) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",

    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      },

      body: JSON.stringify({
        model: "deepseek/deepseek-v4-flash",

        messages: [
          {
            role: "system",

            content: "You are an ATS resume analyzer. Return ONLY valid JSON.",
          },

          {
            role: "user",

            content: `

Analyze this resume and return ONLY valid JSON.

Return format:

{
  "score": number,
  "summary": "string",
  "strengths": ["string"],
  "missingKeywords": ["string"],
  "suggestions": ["string"],
  "improvements": ["string"]
}

Resume:
${resumeText}

`,
          },
        ],
      }),
    },
  );

  const data = await response.json();

  if (!data.choices) {
    throw new Error("AI response failed");
  }

  let text = data.choices[0].message.content;

  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
};

export default analyzeResume;
