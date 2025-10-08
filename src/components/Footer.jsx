import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const Footer = () => {
  const { theme } = useContext(BlogContext);

  return (
    <footer className={`p-8 mt-12 ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">News Geek</p>
        <p className="text-sm mt-2">© 2025 News Geek. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className={`hover:text-blue-400 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>Facebook</a>
          <a href="#" className={`hover:text-blue-400 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>Twitter</a>
          <a href="#" className={`hover:text-blue-400 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
