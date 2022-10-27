import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/bs"

const Login = () => {
    const { googleLogIn, githubLogIn, logIn, facebookLogIn, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // ---> provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    // ---> handle google login
    const handleGoogleLogIn = () => {
        googleLogIn(googleProvider)
            .then(res => {
                toast.success('login successfully');
                navigate(from, { replace: true });
                setError('');
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message);
                setError(err.message);
            })
    }

    // ---> handle github login
    const handleGithubLogIn = () => {
        githubLogIn(githubProvider)
            .then(res => {
                toast.success('login successfully');
                navigate(from, { replace: true });
                setError('');
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message);
                setError(err.message);
            })
    }

    // ---> handle fb login
    const handleFbLogIn = () => {
        facebookLogIn(fbProvider)
            .then(res => {
                toast.success('login successfully');
                navigate(from, { replace: true });
                setError('');
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message);
                setError(err.message);
            })
    }

    // ---> handle email-pass login
    const handleEmailPassLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(res => {
                const user = res.user;
                setError('');
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('login successfully');
                } else {
                    toast.error("Please verify your email address")
                }

            })
            .catch(err => {
                console.error(err)
                toast.error(err.message);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }



    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto bg-emerald-100 my-20 shadow-xl">
            <h1 className="text-3xl font-bold text-center text-emerald-400">Login</h1>
            <form onSubmit={handleEmailPassLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="photoURL" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    <div className="flex justify-end text-xs dark:text-gray-400">
                        <Link rel="noopener noreferrer" to="#">Forgot Password?</Link>
                    </div>
                </div>
                <button type="submit" className="block w-full p-3 text-center rounded-sm bg-emerald-400 hover:bg-emerald-500 text-white dark:text-gray-900 dark:bg-violet-400">Log in</button>
            </form>
            <p className='text-red-500 text-center'><small>{error}</small></p>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleLogIn} aria-label="Log in with Google" className="p-3 text-2xl rounded-sm">
                    <BsGoogle />
                </button>
                <button onClick={handleFbLogIn} aria-label="Log in with Twitter" className="p-3 text-2xl rounded-sm">
                    <BsFacebook />
                </button>
                <button onClick={handleGithubLogIn} aria-label="Log in with GitHub" className="p-3 text-2xl rounded-sm">
                    <BsGithub />
                </button>
            </div>


            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                <Link rel="noopener noreferrer"
                    to="/registration"
                    className="underline dark:text-gray-100 text-blue-400 underline">
                    Registration
                </Link>
            </p>
        </div>
    );
};

export default Login;