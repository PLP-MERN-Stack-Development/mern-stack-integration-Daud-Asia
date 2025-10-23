const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET /api/posts
router.get('/', async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page || '1'));
    const limit = Math.max(1, parseInt(req.query.limit || '10'));
    const skip = (page - 1) * limit;
    const q = req.query.search ? { title: { $regex: req.query.search, $options: 'i' } } : {};

    const total = await Post.countDocuments(q);
    const posts = await Post.find(q).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json({ posts, total, page, pages: Math.ceil(total / limit) });
  } catch (err) { next(err); }
});

// GET /api/posts/:id
router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Not found' });
    res.json(post);
  } catch (err) { next(err); }
});

// POST /api/posts
router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) { next(err); }
});

// PUT /api/posts/:id
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) { next(err); }
});

// DELETE /api/posts/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const d = await Post.findByIdAndDelete(req.params.id);
    if (!d) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (err) { next(err); }
});

module.exports = router;