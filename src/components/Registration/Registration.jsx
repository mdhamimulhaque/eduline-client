import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto bg-emerald-100 my-20 shadow-xl">
            <h1 className="text-2xl font-bold text-center text-emerald-400">Registration</h1>
            <form noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-400">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photoURL" className="block dark:text-gray-400">PhotoURL</label>
                    <input type="text" name="photoURL" id="photoURL" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="photoURL" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <button className="block w-full p-3 text-center bg-emerald-400 hover:bg-emerald-700 text-white rounded-sm dark:text-gray-900 dark:bg-violet-400">submit</button>
            </form>

            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                <Link rel="noopener noreferrer" to="/login" className="underline dark:text-gray-100 text-blue-400 underline"> Login</Link>
            </p>
        </div>
    );
};

export default Registration;