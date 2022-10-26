import React from 'react';

const Faq = () => {
    return (
        <>
            <div className="faq_header">
                <div className="p-6 py-12 bg-emerald-100 dark:bg-violet-400 dark:text-gray-900">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracking-tighter font-bold">Faq </h2>
                        </div>
                    </div>
                </div>
            </div>

            <section className="dark:bg-gray-800 py-20 flex justify-center dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">What is the specialty of this Site?</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">Learn,develop and share your skill</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is this a complete free learning platform?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Free and paid both are available in this site. You will lot of free course here.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can i contribute or sell my course here?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Of course, you can. But your content must have premium level.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can i share my course another site also?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">No,you can not share this.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Any university teach can share his or her lecture?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">They can but the lecture must have well organize.</p>
                        </details>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Faq;