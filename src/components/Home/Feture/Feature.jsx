import React from 'react';
import { FcReading, FcTreeStructure, FcBusiness, FcPicture, FcChargeBattery, FcBullish } from "react-icons/fc";

const Feature = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Top</span>
                    </span>{' '}
                    Categories
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Explore wide-range of online courses. Learn from the best experts of the subjects.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
                <div className="text-center">
                    <div className="flex items-center justify-center text-5xl mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                        <FcReading />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">English</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center text-5xl mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                        <FcTreeStructure />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Development</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center text-5xl mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                        <FcBusiness />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Business</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center text-5xl mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                        <FcPicture />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Graphic Design</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center text-5xl mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                        <FcChargeBattery />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Health</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center text-5xl mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                        <FcBullish />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Digital Marketing</h6>
                </div>
            </div>
            <div className="text-center">
                <a
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-emerald-400 hover:bg-emerald-500 focus:shadow-outline focus:outline-none"
                >
                    Learn more
                    <span className="ml-1 -mr-2">
                        <svg
                            className="w-8 h-8 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Feature;