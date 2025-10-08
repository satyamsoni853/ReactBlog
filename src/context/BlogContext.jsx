import React, { createContext, useState, useEffect } from 'react';
import Data from '../Data/Data.json';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [category, setCategory] = useState('all');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, { id: prevBlogs.length + 1, ...newBlog }]);
  };

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    try {
      if (storedBlogs) {
        const parsedBlogs = JSON.parse(storedBlogs);
        if (parsedBlogs.length > 0) {
          setBlogs(parsedBlogs);
          setFilteredBlogs(parsedBlogs);
        } else {
          // If localStorage has an empty array, fall back to Data.json
          setBlogs(Data);
          setFilteredBlogs(Data);
        }
      } else {
        // If no 'blogs' item in localStorage, use Data.json
        setBlogs(Data);
        setFilteredBlogs(Data);
      }
    } catch (error) {
      console.error("Error parsing blogs from localStorage:", error);
      // Fallback to Data.json if localStorage parsing fails
      setBlogs(Data);
      setFilteredBlogs(Data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
    if (category === 'all') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
      setFilteredBlogs(filtered);
    }
  }, [category, blogs]);

  return (
    <BlogContext.Provider value={{ filteredBlogs, setCategory, theme, toggleTheme, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
