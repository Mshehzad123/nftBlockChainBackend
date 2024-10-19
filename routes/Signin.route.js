import express from 'express'


var router = express.Router();
import signin from '../controler/Signin.controler.js';

// User routes
router.post('/', signin);

export default router;

