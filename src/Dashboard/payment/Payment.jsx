import { useNavigate, useParams } from "react-router-dom";
import Container from "../../Component/Container";

import image from '../../../public/Ions/successful_payment_388054.png'
const PaymentState = () => {

     const params = useParams();
     console.log(params);
     const navigate = useNavigate();


     setTimeout(() => {
          navigate('/dashboard')
     }, [5000])


     return (
          <div>
               <Container>
                    <div className=" flex items-center  justify-center flex-col min-h-[500px]">

                         <div>
                              <img className=" h-[150px]" src={image} alt="" />
                         </div>
                         <h1 className=" text-3xl font-semibold text-center my-5 primaryColor">Payment completed successfully</h1>
                         <h1 className=" text-center text-base md:text-xl  font-bold my-2"> <span className=" text-2xl "> Your transaction id:</span>  {params?.id}  </h1>
                    </div>
               </Container>


          </div>
     );
};

export default PaymentState;