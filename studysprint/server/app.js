const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const groupRoutes = require('./routes/groupRoutes');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error("DB error:", err));

app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);

// ✅ Add this route to test root URL
app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
