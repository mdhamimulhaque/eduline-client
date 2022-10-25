import React from 'react';
import CourseContent from './CourseContent/CourseContent';
import SideNav from './SideNav/SideNav';


const Courses = () => {
    return (
        <main className='container mx-auto grid grid-cols-12 '>
            <aside className='side_nav col-span-12 px-4 lg:px-8 md:col-span-4 bg-emerald-50'>
                <h2 className='text-2xl font-semibold divide-y mt-4 mb-2 border-b-2 border-blue-400 inline-block pb-4'>Choose Category</h2>
                <SideNav />
            </aside>
            <section className="courses_area col-span-12 px-4 lg:px-8 md:col-span-8">
                <div className="course_content_wrapper mt-2">
                    <CourseContent />
                </div>
            </section>
        </main>
    );
};

export default Courses;