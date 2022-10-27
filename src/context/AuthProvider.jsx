import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // ---> google login
    const googleLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // ---> github login
    const githubLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // ---> facebook login
    const facebookLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // ---> registration || create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // ---> email-pass login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }



    // ---> handleCurrent user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])


    // ---> update user profile
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    // ---> email verification
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }


    // ---> log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        setLoading,
        googleLogIn,
        githubLogIn,
        createUser,
        logIn,
        logOut,
        updateUserProfile,
        facebookLogIn,
        emailVerify
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;