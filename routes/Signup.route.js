import express from 'express'


var router = express.Router();
import signup from '../controler/signup.controler.js';

// User routes
router.post('/', signup);

export default router;
 // Use memory storage to handle file as Buffer

// Apply Multer middleware to the route
