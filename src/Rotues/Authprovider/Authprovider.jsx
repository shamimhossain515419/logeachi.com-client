import { createContext, useEffect, useState } from "react";

import {
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     sendEmailVerification,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
     updateProfile,
} from 'firebase/auth'
import app from "../../FirebaseConfig/FirebaseConfig";
import axios from "axios";



export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null);
     const [userinfo, setUserinfo] = useState(null);
     const [open, setOpen] = useState(false)
     const [address, setAddress] = useState({})
     const [search, setSearch] = useState("")
     const GoogleProvider = new GoogleAuthProvider();
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const updateUserProfile = (name, photo) => {
          return updateProfile(auth?.currentUser, {
               displayName: name,
               photoURL: photo,
          })
     }

     const updateProfilePhoto = (name, photo) => {
          return updateProfile(auth?.currentUser, {
               displayName: name,
               photoURL: photo,
          })
     }

     const updatePassword = (newPassword) => {
          return updatePassword(auth?.currentUser, newPassword)
     }


     const GoogleLogin = () => {
          return signInWithPopup(auth, GoogleProvider)
     }

     const verifyUser = () => {
          return sendEmailVerification(auth.currentUser)

     }

     const Login = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }

     const LogOut = () => {
          return signOut(auth)
     }



     useEffect(() => {
          if (user?.email) {
               fetch(`https://logeachi-com-server.vercel.app/address?email=${user?.email}`).then(res => res.json()).then(data => setAddress(data))

          }


     }, [user?.email])
     const getUser = async (email) => {
          const res = await fetch(`https://logeachi-com-server.vercel.app/users?email=${email}`);
          const data = await res.json();
          setUserinfo(data)
     }

     useEffect(() => {
          const unsubcript = onAuthStateChanged(auth, currentUser => {


               if (currentUser?.email) {

                    if (currentUser?.email) {
                         setUser(currentUser);
                         setLoading(false);
                         getUser(currentUser?.email)
                         axios.post('https://logeachi-com-server.vercel.app/jwt')
                              .then(data => {
                                   localStorage.setItem('access-token', data?.data?.token)
                              }).catch(error => {
                                   localStorage.removeItem('access-token')
                              })

                    } else {
                         localStorage.removeItem('access-token')
                         setUser(true)
                    }



               }

          })
          return () => {
               unsubcript()
          }
     }, []);


     const authInfo = {
          createUser,
          updateUserProfile,
          GoogleLogin, updatePassword,
          verifyUser,
          updateProfilePhoto,
          Login, open, setOpen,
          loading, address, setAddress,
          user, userinfo,
          LogOut, search, setSearch
     }
     return (
          <div>
               <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;