import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const BlogCard = ({ blog }) => {
  const { theme } = useContext(BlogContext);
  const { id, image_url, category, title, blogger_name, description } = blog;

  return (
    <Link to={`/blog/${id}`} className="block">
      <div className={`rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full flex flex-col ${theme === 'light' ? 'bg-white border border-yellow-500 shadow-lg shadow-yellow-500/50' : 'bg-gray-800 border border-yellow-400 shadow-lg shadow-yellow-400/50'}`}>
        <img src={image_url} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 flex-grow flex flex-col">
          <div>
            <p className={`text-sm font-medium ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`}>{category}</p>
            <h3 className={`text-xl font-bold mt-2 mb-2 h-14 overflow-hidden ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{title}</h3>
            <p className={`text-base h-24 overflow-hidden ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{description}</p>
          </div>
          <div className="mt-auto flex items-center pt-4">
            <img src={`https://i.pravatar.cc/40?u=${blogger_name}`} alt={blogger_name} className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <p className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{blogger_name}</p>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Read More &rarr;</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;