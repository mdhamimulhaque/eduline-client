import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Faq = () => {
    const faqData = useLoaderData()
    return (
        <>
            <div className="faq_header">
                <div className="p-6 py-12 bg-emerald-100 dark:bg-violet-400 dark:text-gray-900">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-4xl lg:text-6xl tracking-tighter font-bold">Faq </h2>
                        </div>
                    </div>
                </div>
            </div>

            <section className="dark:bg-gray-800 py-20 flex justify-center dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">What is the specialty of this Site?</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">Learn,develop and share your skill</p>
                    <div className="space-y-4">


                        {
                            faqData.map(faq => {
                                return <details key={faq.id} className="w-full border rounded-lg bg-emerald-100">
                                    <summary className="px-4 font-semibold py-6 focus:outline-none focus-visible:ring-violet-400">{faq.qn}</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">{faq.ans}</p>
                                </details>

                            })
                        }







                    </div>
                </div>
            </section>
        </>

    );
};

export default Faq;