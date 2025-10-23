import React, { useEffect, useState } from 'react';
import { postService } from '../services/api';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getAllPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;