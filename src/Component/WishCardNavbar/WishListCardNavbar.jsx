import { Link } from "react-router-dom";
import GetWishList from "../../api/GetWishList";
import { AiOutlineHeart } from "react-icons/ai";
const WishListCardNavbar = () => {

     const [wishlist, isLoading, refetch] = GetWishList();

     return (
          <Link to={'dashboard/wishlist'}>
               <div className="relative inline-flex w-fit">
                    <div
                         className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-[#e50ae9] px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                         {wishlist?.length >= 0 ? wishlist?.length:0}
                    </div>
                    <AiOutlineHeart className=" text-[18px] md:text-[24px]" ></AiOutlineHeart>
               </div>
          </Link>
     );
};

export default WishListCardNavbar;