import React from 'react';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>My Blog App</h1>
      <CreatePost />
      <PostList />
    </div>
  );
}

export default App;