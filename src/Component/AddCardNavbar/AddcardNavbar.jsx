import { useContext, useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import GetCardData from "../../api/GetCardData";
import { Link } from "react-router-dom";

const AddCardNavbar = () => {
     const { user } = useContext(AuthContext);
     const [Card, setCard] = useState(0);
     // if (user) {
          const [addcard, isLoading, refetch] = GetCardData();
     //      setCard(addcard)
     // }


     return (
          <Link to={'/dashboard/shopping'}> 
               <div className="relative inline-flex hover:bg-[#60a103] rounded-md p-2 w-fit">
                    <div
                         className="absolute bg-white primaryColor  bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full  px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                         {addcard?.length >= 0 ? addcard?.length : 0}
                    </div>
                    <PiShoppingCartBold className=" text-[18px] md:text-[24px]"  ></PiShoppingCartBold>
               </div>
          </Link>
     );
};

export default AddCardNavbar;