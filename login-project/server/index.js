const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/loginapp', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // hashed
});

const User = mongoose.model('User', userSchema);

// Create a test user (run once, then comment)
app.get('/create-test-user', async (req, res) => {
  const hashed = await bcrypt.hash('password123', 10);
  await User.create({ username: 'testuser', email: 'test@example.com', password: hashed });
  res.send('User created');
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ status: 'fail', message: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.json({ status: 'fail', message: 'Invalid credentials' });
  res.json({ status: 'success', message: 'Login successful' });
});

app.listen(5000, ()=> console.log('Server started on port 5000'));
