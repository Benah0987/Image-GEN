import Post from "../models/Post";
import * as dotenv from "dotenv";
import { createError } from "../error";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// Uncomment and configure Cloudinary if you need to use it
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        return res.status(200).json({ success: true, data: posts });
    } catch (error) {
        return next(
            createError(
                error.status || 500,
                error?.response?.data?.error?.message || error?.message || "An unexpected error occurred"
            )
        );
    }
};
