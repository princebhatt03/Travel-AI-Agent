const express = require('express');
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/me', protect, getUserProfile);

module.exports = router;
