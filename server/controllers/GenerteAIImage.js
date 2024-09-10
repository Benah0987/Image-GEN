import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64json',
        });

        const generatedImage = response.data.data[0].b64json;

        return res.status(200).json({
            photo: generatedImage
        });
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to generate image',
        });
    }
};
