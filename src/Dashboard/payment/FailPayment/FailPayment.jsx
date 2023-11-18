import { Link, useNavigate, useParams } from "react-router-dom";

import image from '../../../../public/Ions/360_F_583878819_IYxDxNCpY4dlK65g7wZgtfZdaBu6eh1k.jpg'
import Container from "../../../Component/Container";
const FailPayment = () => {

     const params = useParams();
     console.log(params);
     const navigate = useNavigate();


     setTimeout(() => {
          navigate('/dashboard/shopping')
     }, [5000])


     return (
          <div>
               <Container>
                    <div className=" flex items-center  justify-center flex-col min-h-[500px]">

                         <div>
                              <img className=" h-[250px]" src={image} alt="" />
                         </div>
                         <h1 className=" text-3xl font-semibold text-center my-5 primaryColor">Payment Fail</h1>
                         <h1 className=" text-center text-base md:text-xl  font-bold my-2"> <span className=" text-2xl "> Your transaction id:</span>  {params?.id}  </h1>
                        <div className=" bottonBox">
                        <Link to={'/dashboard/shopping'}  className=" text-center  text-base md:text-2xl  py-2 px-4 bottonBox ">  Please try again</Link>

                        </div>
                    </div>
               </Container>


          </div>
     );
};

export default FailPayment;