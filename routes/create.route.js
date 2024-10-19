import express from 'express'
import multer from 'multer';
const upload = multer();

var router = express.Router();
import CreateNfts from '../controler/createnft.controler.js';

// User routes
router.post('/', CreateNfts);

export default router;
 // Use memory storage to handle file as Buffer

// Apply Multer middleware to the route
