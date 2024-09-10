import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import PostRouter from "./routes/Posts.js";
import GenerateImageRouter from "./routes/GenerateImage.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Error handler middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    console.error(`[ERROR] ${status}: ${message}`);
    res.status(status).json({
        success: false,
        status,
        message,
    });
});

// Register the Post routes
app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

// Default GET route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello GFG Developers",
    });
});

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit process with failure
    }
};

// Starting the server and connecting to the database
const startServer = async () => {
    try {
        await connectDB(); // Wait for the database connection before starting the server
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.error("Server startup failed:", error);
    }
};

startServer();
