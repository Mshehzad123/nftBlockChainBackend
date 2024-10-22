import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import createNftRoute from './routes/create.route.js';
import fs from 'fs';
import path from 'path';

const app = express();
dotenv.config();

// Serve the uploads directory as static files
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir); // Create the uploads directory if it doesn't exist
}
app.use('/uploads', express.static(uploadsDir));

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error: ", error));

// Routes
app.use("/createnft", createNftRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
