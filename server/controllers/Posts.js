import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

// Create a new post
export const createPost = async (req, res, next) => {
    try {
        const { name, prompt, photo } = req.body;

        // Ensure that the photo field is provided
        if (!photo) {
            throw createError(400, "Photo is required");
        }

        // Upload image to Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(photo, {
            folder: "posts",
        });

        // Create a new post document with the Cloudinary URL
        const newPost = new Post({
            name,
            prompt,
            photo: uploadResponse.secure_url, // Use the uploaded image URL
        });

        // Save the post to the database
        const savedPost = await newPost.save();

        return res.status(201).json({ success: true, data: savedPost });
    } catch (error) {
        return next(
            createError(
                error.status || 500,
                error?.response?.data?.error?.message || error?.message || "An unexpected error occurred"
            )
        );
    }
};


