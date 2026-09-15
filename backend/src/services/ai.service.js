import { OpenRouter } from "@openrouter/sdk";
import "dotenv/config";

const openrouter = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
});

export const analyzeResume = async (resumeText) => {
    try {
        const response = await openrouter.chat.send({
            chatRequest: {
                model: "nvidia/nemotron-3-ultra-550b-a55b:free",

                messages: [
                    {
                        role: "system",
                        content: `
You are an expert ATS resume analyzer.

Analyze resumes objectively.
Do not invent information.
Return ONLY valid JSON.
`,
                    },
                    {
                        role: "user",
                        content: `
Analyze this resume:

${resumeText}

Return exactly this JSON structure:

{
    "atsScore": 0,
    "aiSummary": "",
    "resumeStrengths": [],
    "aiSuggestions": [],
    "missingKeywords": [],
    "improvementAreas": []
}

Rules:
- atsScore must be a number from 0 to 100.
- Do not invent information.
- Return ONLY JSON.
`,
                    },
                ],
            },
        });

        let content = response.choices[0].message.content;

        // Remove markdown code fences if AI adds them
        content = content
            .replace(/^```json\s*/i, "")
            .replace(/^```\s*/i, "")
            .replace(/\s*```$/i, "")
            .trim();

        const aiAnalysis = JSON.parse(content);

        if (
            typeof aiAnalysis.atsScore !== "number" ||
            typeof aiAnalysis.aiSummary !== "string" ||
            aiAnalysis.atsScore < 0 ||
            aiAnalysis.atsScore > 100 ||
            !Array.isArray(aiAnalysis.resumeStrengths) ||
            !Array.isArray(aiAnalysis.aiSuggestions) ||
            !Array.isArray(aiAnalysis.missingKeywords) ||
            !Array.isArray(aiAnalysis.improvementAreas)
        ) {
            throw new Error("AI returned an invalid analysis format");
        }

        return aiAnalysis;
    } catch (error) {
        console.error("AI analysis error:", error);

        throw new Error("AI analysis is currently unavailable");
    }
};
