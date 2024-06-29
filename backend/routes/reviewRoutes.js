const express = require('express');
const { addReview, getReviews } = require('../controllers/ReviewController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addReview);
router.get('/:postId', getReviews);

module.exports = router;
