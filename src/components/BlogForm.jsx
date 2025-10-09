import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BlogContext } from '../context/BlogContext';
import { validateBlogForm } from '../utils/validation.js';

const BlogForm = ({ initialData, onSubmit }) => {
  const { theme, addBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData || {
    title: '',
    bloggername: '',
    category: '',
    imageurl: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const categories = ["Entertainment", "Technology", "Sports", "Business", "Health", "Science"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateBlogForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        try {
          const response = await axios.post('http://localhost:8000/posts', formData);
          addBlog(response.data);
          alert('Blog post created successfully!');
          navigate('/');
        } catch (error) {
          console.error('Failed to create post:', error);
          alert('Failed to create post. Please try again.');
        }
      }
    }
  };


  return (
    <div className={`max-w-2xl mx-auto p-8 rounded-lg shadow-xl shadow-yellow-500/50 border ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'}`}>
      <h2 className={`text-3xl font-bold text-center mb-8 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        {initialData ? 'Edit Blog Post' : 'Create a New Blog Post'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* All form fields go here... */}
        {/* Title */}
        <div>
          <label htmlFor="title" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-700 text-gray-100'} ${errors.title ? 'border-red-500' : ''}`} />
          {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
        </div>
        {/* Blogger Name */}
        <div>
          <label htmlFor="bloggername" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Blogger Name</label>
          <input type="text" name="bloggername" value={formData.bloggername} onChange={handleChange} className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-700 text-gray-100'} ${errors.bloggername ? 'border-red-500' : ''}`} />
          {errors.bloggername && <p className="mt-1 text-sm text-red-500">{errors.bloggername}</p>}
        </div>
        {/* Category */}
        <div>
          <label htmlFor="category" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-700 text-gray-100'} ${errors.category ? 'border-red-500' : ''}`}>
            <option value="" disabled>Select a category</option>
            {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
          </select>
          {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
        </div>
        {/* Image URL */}
        <div>
          <label htmlFor="imageurl" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Image URL</label>
          <input type="text" name="imageurl" value={formData.imageurl} onChange={handleChange} className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-700 text-gray-100'} ${errors.imageurl ? 'border-red-500' : ''}`} />
          {errors.imageurl && <p className="mt-1 text-sm text-red-500">{errors.imageurl}</p>}
        </div>
        {/* Description */}
        <div>
          <label htmlFor="description" className={`block text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Description</label>
          <textarea name="description" rows="6" value={formData.description} onChange={handleChange} className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-700 text-gray-100'} ${errors.description ? 'border-red-500' : ''}`}></textarea>
          {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
        </div>
        <div className="text-center">
          <button type="submit" className="py-3 px-6 bg-yellow-600 text-white font-bold rounded-md hover:bg-yellow-700 transition-colors">
            {initialData ? 'Save Changes' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;