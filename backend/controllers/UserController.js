const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { createUser, findUserByEmail } = require('../models/User');

dotenv.config();

const register = (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).send(err);
    createUser(email, hashedPassword, (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('User created successfully');
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  findUserByEmail(email, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(400).send('User not found');
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).send(err);
      if (!isMatch) return res.status(400).send('Invalid password');
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      res.send({ token });
    });
  });
};

module.exports = { register, login };
