"use client";

import { useState, useEffect, useCallback } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};


const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTagClick = (tag) => {
    setSearchTerm(tag);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder='Search for prompts or tags'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search_input peer'
        />
      </form>
      <PromptCardList
        data={searchTerm ? filteredPosts : posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;