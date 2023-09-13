import Container from "../../../Component/Container";
import Banner from "../Bannar/Banner";
import FeaturedProduct from "../ProductHome/FeaturedProduct";
import ProductHome from "../ProductHome/ProductHome";
import TrendingProduct from "../ProductHome/TrendingProduct";

 import image1  from '../../../../public/Category/smiling-girl-is-holding-blouse-showing-perfect-gesture-clothes-background_176474-116739.avif'
 import image2 from '../../../../public/Category/Rang-bangladesh-local-8-baner-thumbnail-1118x400-70.jpg'
const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <ProductHome></ProductHome>
               <FeaturedProduct></FeaturedProduct>

               <Container>
                    <div className=" my-12 flex gap-5 items-center ">

                         <div>
                              <img className=" h-[400px] w-full  object-contain" src= {image1} alt="" />
                         </div>
                         <div>
                              <img className=" h-[400px] w-full object-contain " src={image2} alt="" />
                         </div>
                    </div>
               </Container>
               <div>
                    <TrendingProduct></TrendingProduct>
               </div>
          </div>
     );
};

export default Home;