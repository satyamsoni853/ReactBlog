import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';

const FilterBar = () => {
  const { theme, setCategory } = useContext(BlogContext);
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["All", "Entertainment", "Technology", "Sports", "Business", "Health", "Science"];

  const handleFilterClick = (category) => {
    setCategory(category.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div className={`relative p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
      <div className="md:hidden flex justify-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`font-medium transition-colors ${theme === 'light' ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'}`}
        >
          Filter Categories
        </button>
      </div>
      <ul className={`absolute md:relative top-full left-0 w-full md:w-auto md:flex md:justify-center list-none gap-6 m-0 p-4 md:p-0 ${isOpen ? 'block' : 'hidden'} ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
        {categories.map((category) => (
          <li key={category} className="text-center">
            <button 
              onClick={() => handleFilterClick(category)}
              className={`no-underline font-medium transition-colors w-full py-2 md:py-0 ${theme === 'light' ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
