import React, { useState } from 'react';
import Logo from "../../../img/eduline.png";
import { MdFormatListBulleted, MdClear } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {

    const [navbarData, setNavbarData] = useState([])

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
                className="nav_icon cursor-pointer lg:hidden absolute top-5 right-4"
                onClick={() => { setOpen(!open) }}>
                {
                    open ?
                        <MdClear className="h-8 w-8 text-white" />
                        : <MdFormatListBulleted className="h-8 w-8 text-white" />
                }
            </div>

            <nav>
                <ul
                    className={`lg:flex font-semibold absolute top-12 transition-all duration-500 right-0 lg:static w-full text-center z-[-1]
                 ${open ? "top-12" : "top-[-500px]"}`}>
                    {
                        navbarData?.map(navItem =>
                            <li
                                key={navItem?.id}
                                className='ml-4 text-white hover:text-blue-700 transition-all duration-500 text-lg px-4 py-2 my-3'>
                                <Link to={navItem?.path}>{navItem?.name}</Link>
                            </li>
                        )
                    }

                </ul>
            </nav>

            <div className="user_area flex items-center justify-center gap-4">
                <button
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-border-700 transition duration-200 rounded shadow-md border-solid border-2 border-blue-700 bg-white hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                >
                    Log in
                </button>
                <button
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                >
                    Sign Up
                </button>

                <div className="avatar">
                    <div className="w-12 rounded-full border-solid border-2 border-blue-700  ring-offset-base-100  ring-offset-2 " title='himel'>
                        <img src="https://placeimg.com/192/192/people" alt='img' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;