import express from 'express';
import multer from 'multer';
import Controler from '../controler/createnft.controler.js';

const router = express.Router();

// Use Multer middleware to handle multiple file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Define the fields for 'profile' and 'nft' files
router.post('/', upload.fields([
    { name: 'profile', maxCount: 1 },
    { name: 'nft', maxCount: 1 }
]), Controler.CreateNfts);

// Route to get all created NFTs
router.get('/', Controler.getCreatedNft);

export default router;
