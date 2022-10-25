import React, { useState } from 'react';
import Logo from "../../../img/eduline.png";
import { MdFormatListBulleted, MdClear, MdLightMode, MdModeNight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Tippy from '@tippyjs/react';

const Header = () => {

    const [navbarData, setNavbarData] = useState([])
    const [isDarkMood, setDarkMood] = useState(false);

    const handleDarkMood = () => {
        setDarkMood(!isDarkMood)
    }

    useEffect(() => {
        fetch('http://localhost:5000/navbar-data')
            .then(res => res.json())
            .then(data => setNavbarData(data))
    }, [])

    const [open, setOpen] = useState(false)

    return (
        <header className='py-2 px-2 lg:px-5 flex justify-between items-center z-10 bg-emerald-300'>
            <Link to="/">
                <div className="logo flex items-center text-white">
                    <img src={Logo} className="h-8 w-8 " alt="" />
                    <span className='ml-2 text-2xl font-semibold cursor-pointer'>Eduline</span>
                </div>
            </Link>
            <div
                className="nav_icon cursor-pointer lg:hidden absolute right-4"
                onClick={() => { setOpen(!open) }}>
                {
                    open ?
                        <MdClear className="h-8 w-8 text-white" />
                        : <MdFormatListBulleted className="h-8 w-8 text-white" />
                }
            </div>

            <nav>
                <ul
                    className={`lg:flex font-semibold absolute top-12 transition-all duration-500 right-0 lg:static w-full text-center z-10 bg-emerald-300 
                 ${open ? "top-12" : "top-[-500px]"}`}>
                    {
                        navbarData?.map(navItem =>
                            <li
                                key={navItem?.id}
                                className='mr-4 text-white hover:text-blue-700 transition-all duration-500 text-lg px-4 py-2 my-3'>
                                <Link to={navItem?.path}>{navItem?.name}</Link>
                            </li>
                        )
                    }

                    <div className="user_area ">
                        <div className="user_wrapper lg:flex lg:items-center lg:justify-center lg:gap-4 ">

                            <div className="button_area  block lg:inline-block">
                                <Link to="/login">
                                    <button
                                        className="inline-flex m-2 items-center justify-center h-12 px-6 font-medium tracking-wide text-border-700 transition duration-200 rounded shadow-md text-white bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Log in
                                    </button>
                                </Link>
                                <Link to="/registration">
                                    <button
                                        className="inline-flex m-2 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Registration
                                    </button>
                                </Link>
                            </div>


                            <Tippy content="Hello">
                                <div className="avatar mb-4 mt-2">
                                    <div className="w-12 rounded-full border-solid border-2 border-blue-700  ring-offset-base-100  ring-offset-2 ">
                                        <img src="https://placeimg.com/192/192/people" alt='img' />
                                    </div>
                                </div>
                            </Tippy>

                            <div onClick={handleDarkMood} className="avatar mb-4 mt-2">
                                <div className="rounded-full flex items-center justify-center text-2xl">
                                    {isDarkMood ? <MdModeNight /> : <MdLightMode />}
                                </div>
                            </div>
                        </div>
                    </div>

                </ul>
            </nav>



            {/* <div className="user_area hidden lg:block">
                <div className="user_wrapper flex items-center justify-center gap-4 ">
                <div className="button_area hidden lg:block">
                    <Link to="/login">
                        <button
                            className="inline-flex mx-2 items-center justify-center h-12 px-6 font-medium tracking-wide text-border-700 transition duration-200 rounded shadow-md text-white bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Log in
                        </button>
                    </Link>
                    <Link to="/registration">
                        <button
                            className="inline-flex mx-2 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Registration
                        </button>
                    </Link>
                </div>


                <Tippy content="Hello">
                    <div className="avatar">
                        <div className="w-12 rounded-full border-solid border-2 border-blue-700  ring-offset-base-100  ring-offset-2 ">
                            <img src="https://placeimg.com/192/192/people" alt='img' />
                        </div>
                    </div>
                </Tippy>
            </div>
            </div> */}
        </header>
    );
};

export default Header;