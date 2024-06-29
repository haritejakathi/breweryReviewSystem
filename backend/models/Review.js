const db = require('../db/config');

const createReview = (rating, description, userName, postId, callback) => {
  db.run('INSERT INTO reviews (rating, description, userName, postId) VALUES (?, ?, ?, ?)', [rating, description, userName, postId], callback);
};

const getReviewsByPostId = (postId, callback) => {
  db.all('SELECT * FROM reviews WHERE postId = ?', [postId], callback);
};

module.exports = { createReview, getReviewsByPostId };
