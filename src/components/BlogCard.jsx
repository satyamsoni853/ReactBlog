import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const BlogCard = ({ blog }) => {
  const { theme } = useContext(BlogContext);
  const { id, imageurl, category, title, bloggername, description } = blog;


  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength).trim() + "...";
  };

  const DESCRIPTION_MAX_LENGTH = 100; 

  const textColor = theme === 'light' ? 'text-gray-700' : 'text-gray-300';
  

  return (
    <Link to={`/blog/${id}`} className="block group h-full">
      <div
        className={`flex flex-col h-full rounded-lg overflow-hidden border transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ${
          theme === "light"
            ? "bg-white border-gray-200 shadow-lg"
            : "bg-gray-800 border-gray-700 shadow-lg shadow-gray-900/50"
        }`}
      >
        <div className="relative">
          <img src={imageurl} alt={title} className="w-full h-48 object-cover" />
          <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3
              className={`text-lg font-bold mb-2 line-clamp-2 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {title}
            </h3>
            
       
            <p className={`text-sm mb-4 h-[3.5rem] ${textColor}`}>
              {truncateText(description, DESCRIPTION_MAX_LENGTH)}
              {description && description.length > DESCRIPTION_MAX_LENGTH && (
                <span className="text-yellow-500 font-bold ml-1">
                  See More
                </span>
              )}
            </p>

          </div>

          <div className={`mt-auto flex items-center justify-between pt-4 border-t ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
            <div>
              <p className={`font-semibold text-sm ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                {bloggername}
              </p>
            </div>
            <div>
              <p className="text-yellow-500 text-sm font-semibold group-hover:underline">
                Read More &rarr;
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;