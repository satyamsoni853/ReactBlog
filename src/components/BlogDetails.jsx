import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BlogContext } from '../context/BlogContext';

const BlogDetails = () => {
  const { id } = useParams();
  const { theme } = useContext(BlogContext);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/posts/${id}`);
        const data = response.data;
        setBlog(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl">Loading blog...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error.message}</div>;
  }

  if (!blog) {
    return <div className="text-center text-xl">Blog not found</div>;
  }

  const { imageurl, category, title, bloggername, description, published_date } = blog;

  return (
    <div className={`container mx-auto p-8 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <img src={imageurl} alt={title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <div className="mt-8">
          <p className={`text-lg font-medium ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{category}</p>
          <h1 className={`text-5xl font-bold mt-4 mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{title}</h1>
          <div className="flex items-center mb-4">
            <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>By {bloggername}</p>
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
