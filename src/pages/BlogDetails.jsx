import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { BlogContext } from '../context/BlogContext';

const BlogDetails = () => {
    // ... (logic is unchanged)
    const { id } = useParams();
    const { blogs, theme } = useContext(BlogContext);
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://app-latest-3.onrender.com/api/posts/${id}`);
                setBlog(response.data);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch blog:", err);
                setError("Could not load the blog post.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
        // Scroll to top when a new blog is loaded
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (blog) {
            const filtered = blogs
                .filter(b => b.category === blog.category && b.id !== blog.id)
                .slice(0, 3);
            setRelatedBlogs(filtered);
        }
    }, [blog, blogs]);


    if (loading) {
        return <div className={`text-center py-20 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Loading post...</div>;
    }

    if (error) {
        return <div className="text-center py-20 text-red-500">{error}</div>;
    }

    if (!blog) {
        return null;
    }

    return (
        <div className={`max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
            <div className="mb-8">
                <Link to="/" className="text-yellow-500 hover:text-yellow-600 font-semibold">&larr; Back to All Blogs</Link>
            </div>

            <div className={`p-6 sm:p-10 rounded-lg shadow-xl border ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'}`}>
                <article>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{blog.title}</h1>
                    <div className="flex items-center mb-6">
                        <img src={`https://i.pravatar.cc/50?u=${blog.blogger_name}`} alt={blog.blogger_name} className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <p className="font-bold">{blog.blogger_name}</p>
                            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                Published in <span className="font-medium text-indigo-500">{blog.category}</span>
                            </p>
                        </div>
                    </div>

                    <img src={blog.image_url} alt={blog.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8"/>
                    
                    <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: blog.description.replace(/\n/g, '<br />') }} />
                </article>
            </div>

            {/* Related Blogs Section */}
            {relatedBlogs.length > 0 && (
                <aside className="mt-16">
                    <h2 className="text-3xl font-bold mb-6">Related Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedBlogs.map(related => (
                            <Link to={`/blog/${related.id}`} key={related.id} className="block group">
                                <div className={`p-4 rounded-lg h-full transition-all duration-300 shadow-lg hover:shadow-xl border ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'} group-hover:-translate-y-1`}>
                                    <p className="text-indigo-500 text-sm font-semibold">{related.category}</p>
                                    <h3 className="font-bold mt-1 group-hover:text-yellow-500 transition-colors">{related.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>
            )}
        </div>
    );
};

export default BlogDetails;