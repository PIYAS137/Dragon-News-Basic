import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../Firebase/firebase';
import PropTypes from 'prop-types';



export const AuthContext = createContext(null);
const FirebaseAuth = getAuth(app);




// -----------------------------------------------------------------------------------------------------
const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)


    const createUser=(email,pass)=>{
      setLoading(true);
        return createUserWithEmailAndPassword(FirebaseAuth,email,pass);
    }

    useEffect(()=>{
      const status = onAuthStateChanged(FirebaseAuth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      })
      return ()=>{
        status()
      }
    },[])

    const signOutUser = ()=>{
      setLoading(true)
      return signOut(FirebaseAuth);
    }

    const LoginUser=(email,pass)=>{
      setLoading(true)
      return signInWithEmailAndPassword(FirebaseAuth,email,pass)
    }


    const authInfo={
        user,
        createUser,
        signOutUser,
        LoginUser,
        loading,
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes={
  children:PropTypes.node
}

export default AuthContextProvider