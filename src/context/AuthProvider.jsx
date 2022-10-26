import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');

    // ---> google login
    const googleLogIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // ---> github login
    const githubLogIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // ---> registration || create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // ---> email-pass login
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ---> manage user
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, [])


    // ---> log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("log out successfully")
            }).catch((error) => {
                toast.error(error.message)
            });
    }


    console.log(user)


    const authInfo = {
        user,
        googleLogIn,
        githubLogIn,
        createUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;