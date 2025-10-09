import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BlogContext } from './context/BlogContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostBlogPage from './pages/PostBlogPage';
import BlogDetails from './pages/BlogDetails';
import EditBlogPage from './pages/EditBlogPage';

function App() {
  const { theme } = useContext(BlogContext);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-blog" element={<PostBlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/edit-blog/:id" element={<EditBlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;