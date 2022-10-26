import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseOverview from '../CourseDetails/CourseOverview/CourseOverview';

const CheckOut = () => {
    const checkOutItem = useLoaderData();
    const { details, image_url, title, category, overview } = checkOutItem;
    return (
        <section className='container mx-auto py-20 '>
            <div className="checkout_wrapper grid grid-cols-12 gap-4 lg:gap-10">
                <div className="course_info_area col-span-12 lg:col-span-4">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <small className='text-emerald-400'>{category}</small>
                            <h2 className="card-title">{title}</h2>
                            <p>{details.slice(0, 250)}...</p>
                            <div className="overView">
                                {overview.map((overVPoint, index) => <CourseOverview key={index} overVPoint={overVPoint} />)}
                            </div>
                        </div>
                        <figure><img src={image_url} alt="Shoes" /></figure>
                    </div>
                </div>
                <div className="additional_info bg-emerald-100 col-span-12 lg:col-span-8 shadow-sm">
                    <form action="#">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  dark:bg-gray-900">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-xl font-semibold">Personal Address</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="firstname" className="text-sm">First name</label>
                                    <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 h-8 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="lastname" className="text-sm">Last name</label>
                                    <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 h-8 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                    <input id="email" type="email" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 h-8 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Address</label>
                                    <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 h-8 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="city" className="text-sm">City</label>
                                    <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 h-8 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="state" className="text-sm">State / Province</label>
                                    <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 h-8 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                    <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 h-8 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                            </div>
                        </fieldset>

                        <div className="btn_area flex justify-end">
                            <button className='py-3 px-10 mr-6 bg-emerald-400 hover:bg-emerald-500 text-white rounded-sm dark:text-gray-900 dark:bg-violet-400'>Place Order</button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default CheckOut;