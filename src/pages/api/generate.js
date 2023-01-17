import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        return;
    }
    
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(),
            temperature: 0.6,
        })
        res.status(200).json({ result: completion.data });
    } catch (e) {
        console.error(`Error with OpenAI API request: ${e.message}`);
        res.status(500).json({
            message: 'An error occured during your request.',
        })
    }
}



function generatePrompt() {
    return `Suggest a news headline. `
}