import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CreateBlogPage from './pages/CreateBlogPage';
import SingleBlogPage from './pages/SingleBlogPage';
import { BlogContext } from './context/BlogContext';

function App() {
  const { theme } = useContext(BlogContext);

  return (
    <div className={`App ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'}`}>
      <Navbar />
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PostBlog" element={<CreateBlogPage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;