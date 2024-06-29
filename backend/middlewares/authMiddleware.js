const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access Denied');
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(400).send('Invalid Token');
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
