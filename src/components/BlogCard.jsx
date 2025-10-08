import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const BlogCard = ({ blog }) => {
  const { theme } = useContext(BlogContext);
  const { id, image_url, category, title, blogger_name, description } = blog;

  return (
    <Link to={`/blog/${id}`} className="block">
      <div className={`shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
        <img src={image_url} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <p className={`text-sm font-medium ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{category}</p>
          <h3 className={`text-xl font-bold mt-2 mb-2 h-14 overflow-hidden ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{title}</h3>
          <p className={`text-sm mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>By {blogger_name}</p>
          <p className={`text-base h-24 overflow-hidden ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;