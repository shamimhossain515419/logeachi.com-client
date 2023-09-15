import Container from "../../../Component/Container";
import Banner from "../Bannar/Banner";
import FeaturedProduct from "../ProductHome/FeaturedProduct";
import ProductHome from "../ProductHome/ProductHome";
import TrendingProduct from "../ProductHome/TrendingProduct";

import image1 from '../../../../public/Category/smiling-girl-is-holding-blouse-showing-perfect-gesture-clothes-background_176474-116739.avif'
import image2 from '../../../../public/Category/Rang-bangladesh-local-8-baner-thumbnail-1118x400-70.jpg'
import banner1 from '../../../../public/discount.png'
import banner2 from '../../../../public/saree.jpg'
import banner4 from '../../../../public/shirt.webp'
import banner3 from '../../../../public/modal.jpg'
import banner5 from '../../../../public/woman.jpg'

import NewProduct from "../ProductHome/NewProduct";
const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <ProductHome></ProductHome>
               <FeaturedProduct></FeaturedProduct>

               <Container>
                    <div className=" my-12 flex gap-5 items-center ">

                         <div>
                              <img className=" h-[400px] w-full  object-contain" src={image1} alt="" />
                         </div>
                         <div>
                              <img className=" h-[400px] w-full object-contain " src={image2} alt="" />
                         </div>
                    </div>
               </Container>

               <NewProduct></NewProduct>
               <Container>
                    <div>
                         <div className=" my-12 grid md:grid-cols-3  gap-5 items-center ">

                              <div>
                                   <img className=" h-[400px] w-full  " src={banner3} alt="" />
                              </div>
                              <div>
                                   <img className=" h-[400px] w-full  " src={banner4} alt="" />
                              </div>
                              <div>
                                   <img className=" h-[400px] w-full  " src={banner5} alt="" />
                              </div>
                         </div>
                    </div>
               </Container>
               <div>
                    <TrendingProduct></TrendingProduct>
               </div>
               <Container>
                    <div className=" my-12 flex gap-5 items-center ">

                         <div>
                              <img className=" h-[400px] w-full  object-contain" src={banner1} alt="" />
                         </div>
                         <div>
                              <img className=" h-[400px] w-full object-contain " src={banner2} alt="" />
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Home;