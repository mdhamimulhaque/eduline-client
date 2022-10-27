import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogData = useLoaderData()
    return (
        <>
            <div className="blog_container bg-emerald-50">
                <div className="blog_header">
                    <div className="p-6 py-12 bg-emerald-100 dark:bg-violet-400 dark:text-gray-900">
                        <div className="container mx-auto">
                            <div className="flex flex-col lg:flex-row items-center justify-between">
                                <h2 className="text-center text-4xl lg:text-6xl tracking-tighter font-bold">Blog </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <article className="flex flex-wrap gap-4 justify-center dark:bg-gray-900 container mx-auto py-20">
                    {
                        blogData.map(blog => {
                            return <div key={blog.id}>
                                <div className="p-6 bg-white">
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog?.question}</h3>
                                    <p>{blog?.ans}</p>
                                </div>
                            </div>

                        })
                    }
                </article>
            </div>
        </>
    );
};

export default Blog;