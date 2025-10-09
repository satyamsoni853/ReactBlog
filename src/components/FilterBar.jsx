import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const FilterBar = () => {
  const { category, setCategory, theme } = useContext(BlogContext);
  const categories = [
    "All",
    "Entertainment",
    "Technology",
    "Sports",
    "Business",
    "Health",
    "Science",
  ];

  return (
    <div
      className={`p-4 rounded-lg shadow-lg border ${
        theme === "light"
          ? "bg-white border-gray-200"
          : "bg-gray-800 border-gray-700"
      } flex justify-center flex-wrap gap-2 sm:gap-4`}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat.toLowerCase())}
          className={`py-2 px-4 rounded-full font-semibold transition-colors text-sm sm:text-base ${
            category === cat.toLowerCase()
              ? "bg-yellow-500 text-black"
              : theme === "light"
              ? "bg-white text-gray-700 hover:bg-gray-200 border border-gray-300"
              : "bg-gray-700 text-gray-200 hover:bg-gray-600 border border-gray-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
