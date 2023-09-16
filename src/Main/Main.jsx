import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";
import { Toaster } from "react-hot-toast";




const Main = () => {
     return (
          <div>
               <Navbar></Navbar>

               <div className=" mt-20 min-h-[80vh]">
                    <Outlet></Outlet>
               </div>

               <Footer></Footer>


               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />


          </div>
     );
};

export default Main;