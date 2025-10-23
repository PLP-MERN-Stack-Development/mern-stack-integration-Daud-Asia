import React, { useState } from 'react';
import { postService } from '../services/api';
import './PostList.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { title, content };
      await postService.createPost(newPost);
      setMessage('✅ Post created successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      setMessage('❌ Failed to create post.');
      console.error(error);
    }
  };

  return (
    <div className="create-post">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Create Post</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreatePost;