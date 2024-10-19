import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import createNftRoute from './routes/create.route.js';
import signup from './routes/Signup.route.js'
import signin from './routes/Signin.route.js'


const app = express();
dotenv.config();

// Multer setup for file handling (memory storage)
const storage = multer.memoryStorage(); // Files are stored in memory as Buffers
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// MongoDB connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// Use multer middleware for file uploads in the '/createnft' route
app.use("/createnft", upload.single('file'), createNftRoute);  // 'file' is the field name for the uploaded file
app.use("/signup", signup);  
app.use("/signin", signin);  

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
