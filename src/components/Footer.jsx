import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const Footer = () => {
  const { theme } = useContext(BlogContext);

  return (
    <footer className={`p-8 mt-12 ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Blog Geek</p>
        <p className="text-sm mt-2">© 2025 Blog Geek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;