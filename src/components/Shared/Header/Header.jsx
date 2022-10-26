import React, { useState } from 'react';
import Logo from "../../../img/eduline.png";
import { MdFormatListBulleted, MdClear, MdLightMode, MdModeNight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Tippy from '@tippyjs/react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-toastify';
import userPlaceholderImg from "../../../img/user.png";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const [navbarData, setNavbarData] = useState([])
    const [isDarkMood, setDarkMood] = useState(false);

    const handleDarkMood = () => {
        setDarkMood(!isDarkMood)
    }

    // --->navbar data
    useEffect(() => {
        fetch('http://localhost:5000/navbar-data')
            .then(res => res.json())
            .then(data => setNavbarData(data))
    }, [])

    const [open, setOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("logout successfully");
            }).catch((error) => {
                console.error(error)
                toast.error(error.message)
            });
    }


    return (
        <header className='py-2 px-2 lg:px-5 flex justify-between items-center z-10 bg-emerald-700'>
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
                    className={`lg:flex font-semibold absolute top-12 transition-all duration-500 right-0 lg:static w-full text-center z-10 bg-emerald-700 
                 ${open ? "top-12" : "top-[-500px]"}`}>
                    {
                        navbarData?.map(navItem =>
                            <li
                                key={navItem?.id}
                                className='mr-4 text-white hover:text-black transition-all duration-500 text-lg px-4 py-2 my-3'>
                                <Link to={navItem?.path}>{navItem?.name}</Link>
                            </li>
                        )
                    }

                    <div className="user_area ">
                        <div className="user_wrapper lg:flex lg:items-center lg:justify-center lg:gap-4 ">
                            {user?.uid ?
                                <button onClick={handleLogOut}
                                    className="inline-flex m-2 items-center justify-center h-12 px-6 font-medium tracking-wide text-border-700 transition duration-200 rounded shadow-md text-white bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign up"
                                    title="Sign up"
                                >Log Out</button> :
                                <div className="button_area  block lg:inline-block">
                                    <Link to="/login">
                                        <button
                                            className="inline-flex m-2 items-center justify-center h-12 px-6 font-medium tracking-wide text-border-700 transition duration-200 rounded shadow-md bg-emerald-400 hover:bg-emerald-500 text-white focus:shadow-outline focus:outline-none"
                                            aria-label="Sign up"
                                            title="Sign up"
                                        >
                                            Log in
                                        </button>
                                    </Link>
                                    <Link to="/registration">
                                        <button
                                            className="inline-flex m-2 items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-emerald-400 hover:bg-emerald-500 text-white focus:shadow-outline focus:outline-none"
                                            aria-label="Sign up"
                                            title="Sign up"
                                        >
                                            Registration
                                        </button>
                                    </Link>
                                </div>
                            }



                            <Tippy content={user?.displayName ? user?.displayName : "No Name"}>
                                <div className="avatar mb-4 mt-2">
                                    <div className="w-12 rounded-full border-solid border-2 border-blue-700  ring-offset-base-100  ring-offset-2 ">
                                        <img src={user?.photoURL ? user?.photoURL : userPlaceholderImg} alt='img' />
                                    </div>
                                </div>
                            </Tippy>

                            <div onClick={handleDarkMood} className="avatar mb-4 mt-2">
                                <div className="rounded-full flex items-center justify-center text-white text-2xl">
                                    {isDarkMood ? <MdModeNight /> : <MdLightMode />}
                                </div>
                            </div>
                        </div>
                    </div>

                </ul>
            </nav>
        </header>
    );
};

export default Header;