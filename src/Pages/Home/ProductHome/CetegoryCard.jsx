
const CategoryCard = ({card}) => {
     const {  title, image}=card;
     return (
          <div className=" p-3 rounded-lg  shadowbox cursor-pointer">
                  <div className="rounded-lg h-[250px] w-full">
                     <img className=" h-full w-full      rounded-lg" src={image} alt="" />
                  
                  </div>
                  <h1 className=" text-center text-base md:text-lg my-2"> {title} </h1>
          </div>
     );
};

export default CategoryCard;