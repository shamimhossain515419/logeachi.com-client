import { Link } from "react-router-dom";

const CategoryCard = ({ card }) => {
     const { title, image } = card;

     return (
          <Link to={`/product/category?category=${title}&minprice=${0}&maxprice=${1000}&name=`} className=" p-3 rounded-lg  shadowbox cursor-pointer">
               <div className="rounded-lg h-[250px] w-full">
                    <img className=" h-full w-full      rounded-lg" src={image} alt="" />

               </div>
               <h1 className=" text-center text-base md:text-lg my-2"> {title} </h1>
          </Link>
     );
};

export default CategoryCard;