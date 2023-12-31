import { useEffect, useState } from "react";
import Container from "../../Component/Container";
import { BiChevronDown } from "react-icons/bi";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../Component/Title/SectionTitle";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useContext } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import ProductNotFound from "../../Component/ProductNotFond/ProdcutNotFound";

const CategoryProduct = () => {

     const [product, setProduct] = useState([]);
     const [limit, setSetLimit] = useState(6)
     const [maxPrice, setMaxPrice] = useState(1000)
     const [minPrice, setMinPrice] = useState(0)
     const [doemon, setnodeMone] = useState("")
     const [open, setOpen] = useState(false)
     const [category, setCategory] = useState(["Default", false]);
     const { user, search, setSearch } = useContext(AuthContext)
     const navigate = useNavigate();
     console.log(doemon);

     useEffect(() => {
          fetch(`https://logeachi-com-server.vercel.app/product?category=${search}$minprizce=${minPrice}&maxprice=${maxPrice}&name=${search}`).then(res => res.json()).then(data => {

               const projectData = data.sort((a, b) => new Date(b.addTime) - new Date(a.addTime));
               setProduct(projectData)
          });
     }, [category, maxPrice, minPrice, search]);
     console.log(product);

     const handleSelectCatagory = (e) => {
          const data = e?.target?.value;
          setSearch(data)
          if (data !== "Default") {
               setCategory([data, true])
          } else {
               setCategory([data, false])
          }
     }

     useEffect(() => {
          navigate(`/product/category?category=${search}$minprice=${minPrice}&maxprice=${maxPrice}&name=${search}`)
     }, [search, navigate, maxPrice, minPrice])

     return (
          <div>

               <Container>
                    <div> <div className=" flex gap-4 items-center py-5 ">
                         <Link className=" text-xl   font-semibold uppercase" to={'/'}> Home</Link>
                         <Link className=" text-xl   font-semibold uppercase" to={'/'}> T-shirt</Link>
                         <Link className=" text-xl   font-semibold uppercase" to={'/'}> SARAH</Link>
                         <Link className=" text-xl   font-semibold uppercase" to={'/'}> shirt </Link>

                    </div>
                    </div>
                    <div className="  md:flex gap-10 ">

                         <div className="  w-full sm:w-[400px]  p-3 ">
                              <div>
                                   <SectionTitle title={"Price"}></SectionTitle>
                                   <div className=" my-5">
                                        <RangeSlider className=" text-[#841b87fb]" min={10} max={100} />
                                   </div>

                                   <div>
                                        <div className=" w-full flex gap-3 items-center  py-2">
                                             <span className=" text-2xl font-bold">৳</span>
                                             <input onChange={(e) => setMinPrice(e.target.value)} defaultValue={minPrice} required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="number" name="name" placeholder="00" id="" />
                                             <p className=" text-3xl font-bold "> - </p>
                                             <span className=" text-2xl font-bold">৳</span>
                                             <input defaultValue={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="number" name="name" placeholder="00" id="" />

                                        </div>
                                        <div>
                                             <SectionTitle title={"discount"}></SectionTitle>
                                        </div>

                                        <div>
                                             {
                                                  open ? <h1 className="  text-[#18604a] cursor-default capitalize" onClick={()=>setOpen(false)}>  Off Product </h1   > : <h1  className="  text-[#18604a] cursor-default capitalize" onClick={()=>setOpen(true)}> Sort Product</h1>
                                             }
                                        </div>

                                        {
                                             open ? <div className=" md:hidden">


                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium"> On Shipping</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">On Product</p>
                                                  </div>

                                                  <div className=" mt-4">
                                                       <SectionTitle title={"Category"}></SectionTitle>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium"> Man</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">Woman</p>
                                                       </div>
                                                  </div>
                                                  <div className=" mt-4">

                                                       <SectionTitle title={"Brands"}></SectionTitle>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input onChange={(e) => setnodeMone(e.checked)} className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">     Anomos Apparel</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">      Jothashilpa</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">     Shiboni</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium"> AR Tarzi</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium"> Artemis</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">  Bangaliana Fashion Housei</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">  Black House</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">     Cloudrobe</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">     Colourful Canvas</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">          Deemas Life Style</p>
                                                       </div>
                                                  </div>

                                                  <div className=" mt-4">

                                                       <SectionTitle title={"Color"}></SectionTitle>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">     Anomos Apparel</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">        Ash</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">       Biscuit</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium"> black</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium"> Black & White</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">   Blue & Cream</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium"> Bright Yellow</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">  Chilli green</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">Chocolate</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">   Brown & Red</p>
                                                       </div>
                                                  </div>
                                                  <div className=" mt-4">

                                                       <SectionTitle title={"Sleeves type"}></SectionTitle>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">        Adjustable with Button</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">        Cape Sleeve</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 mb-1 ">
                                                            <input className=" " type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">        Full Sleeve</p>
                                                       </div>
                                                       <div className="  flex  items-center gap-3 my-1 ">
                                                            <input type="checkbox" name="" id="" />
                                                            <p className=" tex-md   font-medium">   Sleeve Less</p>
                                                       </div>

                                                  </div>
                                             </div> : null
                                        }

                                        <div className=" hidden md:block">


                                             <div className="  flex  items-center gap-3 my-1 ">
                                                  <input className=" " type="checkbox" name="" id="" />
                                                  <p className=" tex-md   font-medium"> On Shipping</p>
                                             </div>
                                             <div className="  flex  items-center gap-3 my-1 ">
                                                  <input type="checkbox" name="" id="" />
                                                  <p className=" tex-md   font-medium">On Product</p>
                                             </div>

                                             <div className=" mt-4">
                                                  <SectionTitle title={"Category"}></SectionTitle>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium"> Man</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">Woman</p>
                                                  </div>
                                             </div>
                                             <div className=" mt-4">

                                                  <SectionTitle title={"Brands"}></SectionTitle>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input onChange={(e) => setnodeMone(e.checked)} className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">     Anomos Apparel</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">      Jothashilpa</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">     Shiboni</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium"> AR Tarzi</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium"> Artemis</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">  Bangaliana Fashion Housei</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">  Black House</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">     Cloudrobe</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">     Colourful Canvas</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">          Deemas Life Style</p>
                                                  </div>
                                             </div>

                                             <div className=" mt-4">

                                                  <SectionTitle title={"Color"}></SectionTitle>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">     Anomos Apparel</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">        Ash</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">       Biscuit</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium"> black</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium"> Black & White</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">   Blue & Cream</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium"> Bright Yellow</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">  Chilli green</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">Chocolate</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">   Brown & Red</p>
                                                  </div>
                                             </div>
                                             <div className=" mt-4">

                                                  <SectionTitle title={"Sleeves type"}></SectionTitle>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">        Adjustable with Button</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">        Cape Sleeve</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 mb-1 ">
                                                       <input className=" " type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">        Full Sleeve</p>
                                                  </div>
                                                  <div className="  flex  items-center gap-3 my-1 ">
                                                       <input type="checkbox" name="" id="" />
                                                       <p className=" tex-md   font-medium">   Sleeve Less</p>
                                                  </div>

                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>



                         <div className=" w-full">
                              <div className=" flex justify-between items-center">
                                   <SectionTitle title={"Select your preferred product"}></SectionTitle>
                                   <div className=" flex items-center gap-2">
                                        <h1 className=" text-base   font-normal"> Sort by: </h1>
                                        <select defaultValue={category?.[0]} onChange={handleSelectCatagory} className="  border-2 px-4 py-1 rounded border-[#60a103] text-black" label="Sort by">
                                             <option className=" text-black">Default </option>
                                             <option className=" text-black">t-shirt</option>
                                             <option className=" text-black"> sports</option>
                                             <option className=" text-black">sarah</option>
                                             <option className=" text-black">panjabi</option>
                                             <option className=" text-black">woman</option>
                                        </select>
                                   </div>
                              </div>

                              <div>
                                   {
                                        product?.length > 0 ? <div className=" grid md:grid-cols-3 gap-5 xl:grid-cols-4 ">{
                                             product?.map(item => <ProductCard card={item} key={item?._id}></ProductCard>)
                                        }</div> :
                                             <div>
                                                  <ProductNotFound setSearch={setSearch} title={"Product Not Found"}></ProductNotFound>

                                             </div>
                                   }


                              </div>


                              {
                                   product?.length <= limit ? "" : <div className=" mt-4 text-center">
                                        <div onClick={() => setSetLimit(limit + 10)} className="button1">  <div className=" flex  items-center justify-center gap-2  ">
                                             <span className=" text-base"> See More </span> <BiChevronDown size={18}></BiChevronDown></div>
                                        </div>
                                   </div>
                              }

                         </div>

                    </div>
               </Container>


          </div>
     );
};

export default CategoryProduct;