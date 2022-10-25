import React from 'react';
import { Link } from 'react-router-dom';
import HomeBGimg from "../../../src/img/homebg.jpg";
import Feature from './Feture/Feature';

const Home = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${HomeBGimg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Learn Something New Today</h1>
                        <p className="mb-5">Access To 5500+ Courses from 480 Instructors & Institutions</p>
                        <p className="mb-5">Take your learning organisation to the next level.</p>
                        <Link to="/courses"> <button className="btn bg-emerald-400 hover:bg-emerald-700 border-0">Get Started</button></Link>
                    </div>
                </div>
            </div>

            <section className="feature_area">
                <Feature />
            </section>
        </>
    );
};

export default Home;