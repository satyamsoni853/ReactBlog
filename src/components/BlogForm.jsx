import React, { useState, useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const BlogForm = () => {
  const { theme } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    title: '',
    blogger_name: '',
    category: '',
    image_url: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you would typically handle the form submission, e.g., send to an API
  };

  return (
    <div className={`max-w-2xl mx-auto p-8 rounded-lg shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
      <h2 className={`text-3xl font-bold text-center mb-8 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        Create a New Blog Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'}`}
            required
          />
        </div>
        <div>
          <label htmlFor="blogger_name" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Blogger Name
          </label>
          <input
            type="text"
            name="blogger_name"
            id="blogger_name"
            value={formData.blogger_name}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'}`}
            required
          />
        </div>
        <div>
          <label htmlFor="category" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'}`}
            required
          />
        </div>
        <div>
          <label htmlFor="image_url" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Image URL
          </label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'}`}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            rows="6"
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'}`}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="py-3 px-6 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
