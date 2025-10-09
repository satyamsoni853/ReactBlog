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

  return (
    <Link to={`/blog/${id}`} className="block group">
      <div
        className={`rounded-lg transition-all duration-300 flex flex-col shadow-xl shadow-yellow-500/50 border ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-gray-800 border-gray-700"
        } group-hover:-translate-y-1`}
      >
        <img src={imageurl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 flex-grow flex flex-col">
          <div>
            <p className="text-sm font-medium text-indigo-500">{category}</p>
            <h3
              className={`text-xl font-bold mt-2 mb-2 h-14 overflow-hidden ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              {truncateText(title, 50)}
            </h3>
            <p
              className={`text-base w-full whitespace-normal ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
              style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
            >
              {description}
            </p>
          </div>
          <div className="mt-auto flex items-center pt-4  ">
            <div>
              <p
                className={`font-semibold ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                {bloggername}
              </p>
              <p className="text-sm text-yellow-500">Read More &rarr;</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
