import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './DesignServices.css';
import Container from '../Container';
import ProductCard from '../ProductCard/ProductCard';
import SectionTitle from '../Title/SectionTitle';

const DesignServices = () => {

     const [product, setProduct] = useState([]);
     useEffect(() => {
          fetch(`https://logeachi-com-server.vercel.app/product?category=$minprizce=${0}&maxprice=${10000}&name=`).then(res => res.json()).then(data => {
               const projectData = data.sort((a, b) => new Date(b.addTime) - new Date(a.addTime));
               const shuffledUsers = [...projectData];
               for (let i = shuffledUsers.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledUsers[i], shuffledUsers[j]] = [shuffledUsers[j], shuffledUsers[i]];
               }
               setProduct(shuffledUsers);
          }
          )
     }, []);

     const swiperRef = useRef(null);
     const goNext = () => {
          if (swiperRef.current) {
               swiperRef.current.swiper.slideNext();
          }
     };
     const goPrev = () => {
          if (swiperRef.current) {
               swiperRef.current.swiper.slidePrev();
          }
     };
     const [activeIndex, setActiveIndex] = useState(0);
     const handleSlideChange = () => {
          if (swiperRef.current) {
               setActiveIndex(swiperRef.current.swiper.realIndex);
          }
     };
     console.log(activeIndex);
     return (

          <Container>
               <div className=' my-16 '>
                    <div className=' flex  py-2 justify-between gap-3'>
                         <SectionTitle title={"New  product"}></SectionTitle>
                         <div className=' flex  items-center gap-5'>
                              <div className='  bg-[#00000046] hover:bg-[#18604a] text-white  p-4 rounded-full cursor-pointer' onClick={goNext}>
                                   <FaArrowLeft size={18} />
                              </div>
                              <div onClick={goPrev} className='  primaryBg text-white  p-4 rounded-full cursor-pointer'>
                                   <FaArrowRight size={18} />
                              </div>
                         </div>
                    </div>
                    <Swiper
                         effect={'coverflow'}
                         grabCursor={true}
                         centeredSlides={true}
                         ref={swiperRef}
                         loop={true}
                         slidesPerView={1}
                         onSlideChange={handleSlideChange}
                         spaceBetween={10}
                         coverflowEffect={{
                              rotate: 5,
                              stretch: 0,
                              depth: 20,
                              modifier: 0,
                              slideShadows: true,

                         }}

                         modules={[EffectCoverflow, Pagination]}
                         breakpoints={{
                              768: {
                                   slidesPerView: 2,
                                   spaceBetween: 15,
                              },
                              1024: {
                                   slidesPerView: 4,
                                   spaceBetween: 20,
                              },
                              1200: {
                                   slidesPerView: 5,
                                   spaceBetween: 30,
                              },
                         }}

                         className=" w-full overflow-hidden "
                    >
                         {product?.map((item, index) => <SwiperSlide key={index}>
                              <ProductCard key={item._id} card={item}></ProductCard>
                         </SwiperSlide>)
                         } </Swiper>

               </div>
          </Container>
     );
};

export default DesignServices;
