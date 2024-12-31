import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { auth } from '../firebase.init';
import { useState } from 'react';

 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] =useState(null)

   

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('current user', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    })

    // onAuthStateChanged(auth, currentUser =>{
    //     if (currentUser) {
    //         console.log('Currentky logged user', currentUser)
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('No user logged in')
    //         setUser(null)
    //     }
    // })

   const authInfo = {
     
       user,
       loading,
       createUser,
       signInUser,
       signOutUser

   }

    return (
        <AuthContext.Provider value={authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;