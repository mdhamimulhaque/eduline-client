import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const Registration = () => {
    const { createUser, updateUserProfile, setLoading, emailVerify } = useContext(AuthContext);
    const [error, setError] = useState('');
    // ---> handle registration
    const handleRegistrationForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // --->handle create user
        createUser(email, password)
            .then(res => {
                toast.success('Registration successfully');
                form.reset();
                setError('')
                handleUpdateUserProfile(fullName, photoURL);
                handleEmailVerify()
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

    // ---> handle update user profile
    const handleUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        updateUserProfile(profile)
            .then(() => {
                console.log('profile updated')
            }).catch((error) => {
                console.error(error)
            });
    }

    // ---> handle email verify
    const handleEmailVerify = () => {
        emailVerify()
            .then(() => {
                toast.success('Please check your email and verified it');
            }).catch((error) => {
                setError(error.message);
                toast.error(error.message);
                console.log(error)
            })

    }
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto bg-emerald-100 my-20 shadow-xl">
            <h1 className="text-3xl font-bold text-center text-emerald-400">Registration</h1>
            <form onSubmit={handleRegistrationForm} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="fullName" className="block dark:text-gray-400">Full Name</label>
                    <input type="text" name="fullName" id="fullName" placeholder="Your Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>

                <div className="space-y-1 text-sm">
                    <label htmlFor="photoURL" className="block dark:text-gray-400">PhotoURL</label>
                    <input type="text" name="photoURL" id="photoURL" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>

                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>

                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>

                <button type='submit' className="block w-full p-3 text-center bg-emerald-400 hover:bg-emerald-500 text-white rounded-sm dark:text-gray-900 dark:bg-violet-400">submit</button>
            </form>
            <p className='text-red-500 text-center'><small>{error}</small></p>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                <Link to="/login" rel="noopener noreferrer" className="underline dark:text-gray-100 text-blue-400 underline">Login </Link>
            </p>
        </div>
    );
};

export default Registration;