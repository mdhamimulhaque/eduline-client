import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import CourseOverview from './CourseOverview/CourseOverview';

const CourseDetails = () => {
    const courseDetailsData = useLoaderData()
    const { name, details, image_url, _id, title, category, overview } = courseDetailsData;
    return (
        <section>
            <div className="course-details_header_area bg-emerald-100">
                <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <h2 className="text-6xl font-semibold">{name}</h2>
                            <button className="block p-3 text-center flex  items-center justify-center gap-2 rounded-sm bg-emerald-400 hover:bg-emerald-700 text-white dark:text-gray-900 dark:bg-violet-400"><FaCloudDownloadAlt className='text-lg' /> pdf download</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" ">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between lg:flex-row">
                        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                            <div className="max-w-xl mb-6">
                                <div>
                                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full text-emerald-500">
                                        {category}
                                    </p>
                                </div>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    {title}
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    {details}
                                </p>
                            </div>

                            <div className="course_overview">
                                <h1 className="text-2xl font-bold mb-8">Course overview</h1>
                                {overview.map((overVPoint, index) => <CourseOverview key={index} overVPoint={overVPoint} />)}
                            </div>



                            <div className="mt-6">
                                <Link to={`/checkout/${_id}`}>
                                    <button className="block w-full p-3 text-center rounded-sm bg-emerald-400 hover:bg-emerald-700 text-white dark:text-gray-900 dark:bg-violet-400">Get Premium Access</button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative lg:w-1/2">
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                src={image_url} alt=""
                            />
                            <Link
                                to="/courses"
                                aria-label="Play Video"
                                className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                            >
                                <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                                    <svg
                                        className="w-10 text-gray-900"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;