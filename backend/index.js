const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const db = require('./db/config');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
