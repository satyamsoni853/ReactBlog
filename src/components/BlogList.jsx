import React, { useContext } from 'react';
import BlogCard from './BlogCard';
import { BlogContext } from '../context/BlogContext';

const BlogList = () => {
  const { filteredBlogs } = useContext(BlogContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
