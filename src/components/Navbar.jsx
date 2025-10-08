import React, { useContext } from 'react';
import { CiLight, CiDark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(BlogContext);

  return (
    <header className={`sticky top-0 z-50 shadow-md ${
      theme === 'light' 
        ? 'bg-gray-100/80 border-b border-gray-200 backdrop-blur-md' 
        : 'bg-gray-900/80 border-b border-gray-700 backdrop-blur-md'
    }`}>
      <nav className="container mx-auto flex justify-between items-center p-4 font-sans">
        <div className={`text-2xl font-bold ${theme === 'light' ? 'text-yellow-500' : 'text-yellow-400'}`}>
          <Link to="/">Blog Geek</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/post-blog">
            <button className="py-2 px-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition-colors">
              Post Blog
            </button>
          </Link>
          <button 
            onClick={toggleTheme}
            className={`py-2 px-4 font-bold rounded-md transition-colors text-2xl ${
              theme === 'light' 
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {theme === 'light' ? <CiDark /> : <CiLight />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;