import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

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


    const authInfo = {
        user,
        googleLogIn,
        githubLogIn,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;