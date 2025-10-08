import React, { useContext } from 'react';
import BlogList from '../components/BlogList';
import { BlogContext } from '../context/BlogContext';

const Home = () => {
  const { theme } = useContext(BlogContext);

  return (
    <div className="container mx-auto p-8">
      <h1 className={`text-4xl font-bold text-center mb-12 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        Latest Blog Posts
      </h1>
      <BlogList />
    </div>
  );
};

export default Home;
