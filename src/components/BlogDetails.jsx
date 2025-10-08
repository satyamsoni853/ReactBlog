import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import Data from '../Data/Data.json';

const BlogDetails = () => {
  const { id } = useParams();
  const { theme } = useContext(BlogContext);
  const blog = Data.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { image_url, category, title, blogger_name, description, published_date } = blog;

  return (
    <div className={`container mx-auto p-8 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <img src={image_url} alt={title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <div className="mt-8">
          <p className={`text-lg font-medium ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{category}</p>
          <h1 className={`text-5xl font-bold mt-4 mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{title}</h1>
          <div className="flex items-center mb-4">
            <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>By {blogger_name}</p>
            <span className="mx-2">•</span>
            <p className={`text-lg ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{published_date}</p>
          </div>
          <div className={`prose max-w-none ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
