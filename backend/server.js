const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const certificateRoutes = require('./routes/certificateRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/certificates', certificateRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
