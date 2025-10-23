const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

let User;
try { User = require('../models/User'); }
catch (e) {
  const schema = new mongoose.Schema({ name: String, email: String, passwordHash: String }, { timestamps: true });
  User = mongoose.model('User', schema);
}

router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'devsecret');
    res.json({ token, user: { id: user._id, name: user.name, email: user.email }});
  } catch (err) { next(err); }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'devsecret');
    res.json({ token, user: { id: user._id, name: user.name, email: user.email }});
  } catch (err) { next(err); }
});

module.exports = router;