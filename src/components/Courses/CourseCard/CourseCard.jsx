import React from 'react';
import { AiFillEye } from "react-icons/ai";

const CourseCard = ({ course }) => {
    const { name, details, image_url, rating, title, total_view } = course;

    return (
        <>
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <p className="dark:text-gray-100 text-emerald-400 font-semibold">{name}</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={image_url} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="flex justify-between items-center text-xs">
                        <span className='flex items-center text-base gap-2'><AiFillEye /> {total_view}</span>
                        <span className='flex items-center text-base gap-2'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            {rating?.number}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold dark:text-violet-400">{title}</h3>
                    <p className="leading-snug dark:text-gray-400">{details.slice(0, 150)}...</p>
                </div>
            </div>
        </>
    );
};

export default CourseCard;