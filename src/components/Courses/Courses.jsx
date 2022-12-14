import React from 'react';
import CourseContent from './CourseContent/CourseContent';
import SideNav from './SideNav/SideNav';


const Courses = () => {
    return (
        <main className='container mx-auto grid grid-cols-12 '>
            <section className="courses_area col-span-12 px-4 pb-20 lg:px-8 md:col-span-8 order-2 lg:order-1">
                <div className="course_content_wrapper mt-2">
                    <CourseContent />
                </div>
            </section>
            <aside className='side_nav col-span-12 px-4 lg:px-8 md:col-span-4 bg-emerald-100 order-1 lg:order-2'>
                <h2 className='text-2xl font-semibold divide-y mt-4 mb-2 border-b-2 border-blue-400 inline-block pb-4'>Choose Your Course</h2>
                <SideNav />
            </aside>

        </main>
    );
};

export default Courses;