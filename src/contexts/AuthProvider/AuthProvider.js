import React from 'react';
import {getAuth, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {user, setUser, googleSignIn, logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;