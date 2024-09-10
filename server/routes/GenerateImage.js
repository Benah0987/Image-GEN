import express from 'express';
import { generateImage } from '../controllers/GenerteAIImage.js'; // Adjust the path as necessary

const router = express.Router();

router.post('/generate-image', generateImage);

export default router;
