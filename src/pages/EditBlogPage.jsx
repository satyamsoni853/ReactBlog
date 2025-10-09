import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogForm from '../components/BlogForm';
import { BlogContext } from '../context/BlogContext';

const EditBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme, updateBlog } = useContext(BlogContext);
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/posts/${id}`);
        setInitialData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.put(`http://localhost:8000/posts/${id}`, formData);
      updateBlog(response.data);
      alert('Blog post updated successfully!');
      navigate(`/blog/${id}`);
    } catch (err) {
      console.error('Failed to update post:', err);
      alert('Failed to update post. Please try again.');
    }
  };

  if (loading) {
    return <div className="text-center text-xl">Loading blog for editing...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading blog: {error.message}</div>;
  }

  if (!initialData) {
    return <div className="text-center text-xl">Blog not found for editing.</div>;
  }

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className="container mx-auto py-10">
        <h2 className={`text-4xl font-bold text-center mb-10 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          Edit Blog Post
        </h2>
        <BlogForm initialData={initialData} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default EditBlogPage;
