import { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase';
import PropTypes from 'prop-types';



export const AuthContext = createContext(null);
const FirebaseAuth = getAuth(app);
const GoogleProvider=new GoogleAuthProvider()




// -----------------------------------------------------------------------------------------------------
const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const [cate,setCate]=useState(0)



    const setDatasByClick=(val)=>{
      setCate(parseInt(val))
    }












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

    const GoogleLogIn=()=>{
      setLoading(true)
      return signInWithPopup(FirebaseAuth,GoogleProvider)
    }

    const UpdateUserProfile=(res,name,photo)=>{
      setLoading(true)
      return updateProfile(res,{
        displayName:name,
        photoURL:photo
      })
    }


    const authInfo={
        user,
        createUser,
        signOutUser,
        LoginUser,
        loading,
        GoogleLogIn,
        UpdateUserProfile,
        cate,
        setDatasByClick
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