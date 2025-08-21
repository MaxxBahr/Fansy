import { API_KEY } from '@env';
import axios from 'axios';

const openAI = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
});

export const generateText = async (input) => {
    try {
        const response = await openAI.post('/completions', {
            model: 'gpt-4o-mini-2024-07-18',
            prompt: input,
            max_tokens: 150
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error generating text:", error);
        throw error;
    }
}