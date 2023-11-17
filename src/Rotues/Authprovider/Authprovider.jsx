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

          fetch(`https://logeachi-com-server.vercel.app/address?email=${user?.email}`, { method: "GET" }).then(res => res.json()).then(data => setAddress(data))

     }, [user])

     useEffect(() => {
          const unsubcript = onAuthStateChanged(auth, currentUser => {


               if (currentUser?.email) {
                    axios.post('https://logeachi-com-server.vercel.app/jwt')
                         .then(data => {
                              setUser(currentUser);
                              setLoading(false);
                              localStorage.setItem('access-token', data?.data?.token);

                              axios.get(`https://logeachi-com-server.vercel.app/users?email=${currentUser?.email}`).then(result => {
                                   if (!result?.data) {
                                        const UserData = { name: currentUser?.displayName, email: currentUser?.email, status: "user" }
                                        axios.post('https://logeachi-com-server.vercel.app/users', UserData).then(result => {
                                             console.log(result?.data?.email);
                                        })
                                   }

                              })

                         }).catch(error => {
                              localStorage.removeItem('access-token');
                              setLoading(true);
                         })

               } else {
                    localStorage.removeItem('access-token')
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
          loading,address,setAddress,
          user,
          LogOut, search, setSearch
     }
     return (
          <div>
               <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;