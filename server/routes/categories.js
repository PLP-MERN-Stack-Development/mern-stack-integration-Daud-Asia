const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

let Category;
try { Category = require('../models/Category'); }
catch (e) {
  const schema = new mongoose.Schema({ name: { type: String, required: true } }, { timestamps: true });
  Category = mongoose.model('Category', schema);
}

router.get('/', async (req, res, next) => {
  try {
    const cats = await Category.find().sort('name');
    res.json(cats);
  } catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
  try {
    const cat = await Category.create({ name: req.body.name });
    res.status(201).json(cat);
  } catch (err) { next(err); }
});

module.exports = router;