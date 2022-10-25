import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

const SideNav = () => {
    const courses = useLoaderData();
    return (
        <div>
            {
                courses.map(course =>
                    <Link to={course._id} key={course._id}>
                        <div className="my-5 flex items-center gap-3 text-lg cursor-pointer hover:text-blue-400">
                            <MdKeyboardArrowRight /> <span>{course?.name}</span>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default SideNav;