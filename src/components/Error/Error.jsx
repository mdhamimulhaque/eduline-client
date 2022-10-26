import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className="flex items-center justify-center h-screen p-16 h-screen dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-red-500 text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <button className='mt-10'>
                        <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-emerald-400 hover:bg-emerald-500 text-white">Back to homepage</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Error;