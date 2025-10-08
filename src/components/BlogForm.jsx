import React, { useState, useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { validateBlogForm } from '../utils/validation.js'; 

const BlogForm = () => {
  const { theme, addBlog } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    title: '',
    blogger_name: '',
    category: '',
    image_url: '',
    description: ''
  });

  const [errors, setErrors] = useState({}); 

  const categories = ["Entertainment", "Technology", "Sports", "Business", "Health", "Science"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateBlogForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      addBlog(formData);
      alert('Form submitted successfully!');
      setFormData({
        title: '',
        blogger_name: '',
        category: '',
        image_url: '',
        description: ''
      });
    } else {
      console.log('Validation Failed:', validationErrors);
    }
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
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'} ${errors.title ? 'border-red-500' : ''}`}
            required
          />
          {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
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
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'} ${errors.blogger_name ? 'border-red-500' : ''}`}
            required
          />
          {errors.blogger_name && <p className="mt-1 text-sm text-red-500">{errors.blogger_name}</p>}
        </div>

        <div>
          <label htmlFor="category" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Category
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'} ${errors.category ? 'border-red-500' : ''}`}
            required
          >
            <option value="" disabled>Select a category</option>

            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
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
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'} ${errors.image_url ? 'border-red-500' : ''}`}
            required
          />
          {errors.image_url && <p className="mt-1 text-sm text-red-500">{errors.image_url}</p>}
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
            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300 bg-white text-gray-900' : 'border-gray-600 bg-gray-700 text-white'} ${errors.description ? 'border-red-500' : ''}`}
            required
          ></textarea>
          {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
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