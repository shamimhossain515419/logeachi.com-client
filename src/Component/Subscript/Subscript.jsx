import { useState } from 'react';
import Container from '../Container';
import './Subscript.css'
import { useContext } from 'react';
import { AuthContext } from '../../Rotues/Authprovider/Authprovider';
import useAxiosSecure from '../AxioxSecour/AxiosSecure';
import Swal from 'sweetalert2';
const Subscript = () => {

     const { user } = useContext(AuthContext);

     const [axiosSecure] = useAxiosSecure()

     const handleSubscribe = async (e) => {
          e.preventDefault();
          const from= e.target;
          const email = e.target.email?.value;

          const formData={ name: user?.displayName, photo: user?.photoURL, email: email }

          const res = await fetch('https://logeachi-com-server.vercel.app/subscribe', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
                 // Add any additional headers if needed
               },
               body: JSON.stringify(formData),

          });

          const result = await res.json();
          if (result?.insertedId) {
               Swal.fire(`Thanks ! For being by our side, ${ user?.displayName } !`);
               from.reset();
          }

          


     }


     return (
          <div className=' '>
               <Container>
                    <div className="subscribe">

                         <h2 className="subscribe__title">Let's keep in touch</h2>
                         <p className="subscribe__copy">Stay with us and all the news
                              Subscribe to get updates</p>

                         <form onSubmit={handleSubscribe} className="form">
                              <input required type="email" name='email' className="form__email" placeholder="Enter your email address" />
                              <button type='submit' className="form__button">Send</button>
                         </form>
                         <div className="notice">
                              <input type="checkbox" />
                              <span className="notice__copy">I agree to my email address being stored and uses to recieve monthly newsletter.</span>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Subscript;