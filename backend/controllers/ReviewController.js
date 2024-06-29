const { createReview, getReviewsByPostId } = require('../models/Review');

const addReview = (req, res) => {
  const { rating, description, userName, postId } = req.body;
  createReview(rating, description, userName, postId, (err) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Review added successfully');
  });
};

const getReviews = (req, res) => {
  const { postId } = req.params;
  getReviewsByPostId(postId, (err, reviews) => {
    if (err) return res.status(500).send(err);
    res.send(reviews);
  });
};

module.exports = { addReview, getReviews };
