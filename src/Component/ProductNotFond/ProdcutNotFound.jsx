import { Link } from "react-router-dom";


const ProductNotFound = ({ setSearch, title, subtitle }) => {
     return (
          <div className=" flex justify-center items-center  min-h-[500px]">
               <div>
                    <h1 className=" text-base md:text-2xl  xl:text-3xl font-bold  text-center  primaryColor"> {title} </h1>
                    <p className=" text-base  md:text-base "> {subtitle} </p>

                    <div className=" cursor-pointer bottonBox px-2 text-center mt-5">
                         <div  onClick={()=>setSearch("")}  className=" "> Refresh </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductNotFound;