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
import { useQuery } from "@tanstack/react-query";



// import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null);

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
          const unsubcript = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               setLoading(false);

               if (currentUser?.email) {
                    axios.post('http://localhost:5000/jwt')
                         .then(data => {

                              localStorage.setItem('access-token', data?.data?.token);

                              axios.get(`http://localhost:5000/users?email=${currentUser?.email}`).then(result => {
                                   if (!result?.data) {
                                        console.log("shamim");
                                        const UserData = { name: currentUser?.displayName, email: currentUser?.email, status: "user" }
                                        axios.post('http://localhost:5000/users', UserData).then(result => {
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



               // if (!CurrentUser) {
               //      axios.post('http://localhost:5000/users', Userdata).then(result => {
               //           if (result) {
               //                navigate('/')
               //                toast.success('সফলভাবে নিবন্ধন হয়েছে!')
               //           }

               //      })
               // }
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
          Login,
          loading,
          user,
          LogOut
     }
     return (
          <div>
               <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;