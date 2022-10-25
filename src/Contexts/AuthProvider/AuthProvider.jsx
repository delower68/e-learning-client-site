import React, { createContext, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // using email and password and create an user  
    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth, email , password)
    }

    // sign in here 
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password)
    }

        // log out 
        const logOut = ()=>{
            setLoading(true);
            return signOut(auth)
        }


          // google log in 
    const providerLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // user state change control 
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo= {
            user, 
            createUser,
            loading,
            signIn,
            logOut,
            providerLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;