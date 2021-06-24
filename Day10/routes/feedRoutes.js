const express = require('express');
const path = require('path');
const router = express.Router();
const feedController = require('../controllers/feedController');

// Get: All Post 
router.get('/posts', feedController.getPosts);

// Post: Post 
router.post('/post', feedController.createPost);


module.exports = router;