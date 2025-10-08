import React, { createContext, useState, useEffect } from 'react';
import Data from '../Data/Data.json';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [category, setCategory] = useState('all');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setBlogs(Data);
    setFilteredBlogs(Data);
  }, []);

  useEffect(() => {
    if (category === 'all') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
      setFilteredBlogs(filtered);
    }
  }, [category, blogs]);

  return (
    <BlogContext.Provider value={{ filteredBlogs, setCategory, theme, toggleTheme }}>
      {children}
    </BlogContext.Provider>
  );
};
