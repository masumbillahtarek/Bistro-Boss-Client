import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth=getAuth(app)
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}  
const signIn=(email,password)=>{
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
} 
const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser, {
  displayName: name, photoURL:photo
})
}  
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser)
setLoading(false)
});
return()=>{
  return  unsubscribe()
}
},[])
const authInfo={ signIn,createUser,user,loading,logOut,updateUserProfile}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;