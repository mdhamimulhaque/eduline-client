import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const CourseContent = () => {
    const courses = useLoaderData()
    return (
        <>
            <h2
                className='text-2xl font-semibold divide-y p-2 mt-4 border-2 border-blue-400 inline-block'>
                Running Courses: {courses.length}
            </h2>
            <div className='flex flex-wrap justify-center gap-4 mt-4'>
                {
                    courses.map(course =>
                        <div key={course._id} className="max-w-md p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <Link to={`/course-details/${course._id}`} className="cursor-pointer">
                                <CourseCard course={course} />
                            </Link>
                        </div>
                    )
                }
            </div>
        </>

    );
};

export default CourseContent;