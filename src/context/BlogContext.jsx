import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [category, setCategory] = useState('all');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/posts');
        console.log("Fetched blogs:", response.data);
        setBlogs(response.data);
        setFilteredBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (category === 'all') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
      setFilteredBlogs(filtered);
    }
  }, [category, blogs]);

  // API Functions
  const addBlog = (newPostFromServer) => {
    setBlogs(prevBlogs => [newPostFromServer, ...prevBlogs]);
  };

  const updateBlog = async (id, updatedBlogData) => {
    try {
      const response = await axios.put(`http://localhost:8000/posts/${id}`, updatedBlogData);
      const updatedPostFromServer = response.data;
      setBlogs(prevBlogs => 
        prevBlogs.map(blog => (blog.id === id ? updatedPostFromServer : blog))
      );
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/posts/${id}`);
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <BlogContext.Provider 
      value={{ 
        blogs,
        filteredBlogs, 
        category,
        setCategory, 
        theme, 
        toggleTheme, 
        addBlog, 
        updateBlog, 
        deleteBlog 
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};