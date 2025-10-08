import React, { useContext } from 'react';
import { CiLight, CiDark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import FilterBar from './FilterBar';
import { BlogContext } from '../context/BlogContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(BlogContext);

  return (
    <header>
      <nav className={`flex justify-between items-center p-4 font-sans ${
        theme === 'light' 
          ? 'bg-gray-100 border-b border-gray-300' 
          : 'bg-gray-900 border-b border-gray-700'
      }`}>
        
        <div className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>
          <a href="/">News Geek</a>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/PostBlog">
            <button className="py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors">
              Post Blog
            </button>
          </Link>
          <button 
            onClick={toggleTheme}
            className="py-2 px-4 bg-gray-700 text-white font-bold rounded-md hover:bg-gray-900 transition-colors text-2xl"
          >
            {theme === 'light' ? <CiDark /> : <CiLight />}
          </button>
        </div>
      </nav>
      <FilterBar />
    </header>
  );
};

export default Navbar;