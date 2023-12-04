import { useState } from "react";
import SectionTitle from "../../Component/Title/SectionTitle";
import useAxiosSecure from "../../Component/AxioxSecour/AxiosSecure";
import toast from "react-hot-toast";


const Add_product = () => {
     const options = [
          { value: 'new-Shirt', label: 'New-Shirt' },
          { value: 't-shirt', label: 'T-shirt' },
          { value: 'shari', label: 'Shari' },
          { value: 'pants', label: 'Pants' },
          { value: 'sports-T-shirt', label: 'Sports-T-shirt' },
          { value: 'panjabi', label: 'Panjabi' },


     ];
     const [selectData, setSelectData] = useState("")
     const [axiosSecure] = useAxiosSecure();
     console.log(selectData);
     var randomDecimal = Math.random();
     var randomNumber = 2 + randomDecimal * 3;

     const handleSubmit = async (e) => {
          e.preventDefault();

          const from = e.target;

          const name = from?.name?.value;
          const discount = from?.discount?.value;
          const price = from?.price?.value;
          const brand = from?.brand?.value;
          const description = from?.description?.value;
          const Sleeve = from?.Sleeve?.value;
          const Occasion = from?.Occasion?.value;
          const image2 = from?.image2?.value;
          const image3 = from?.image3?.value;
          const image1 = from?.image1?.value;
          const fromData = { name, reading: randomNumber, category: selectData, addTime: new Date(), discount: parseInt(discount), price: parseInt(price), description, Occasion, Sleeve, brand, image1, image2, image3 };
          console.log(fromData);


          axiosSecure.post('/product', fromData).then(result => {
               if (result?.data?.insertedId) {
                    console.log(result);
                    toast.success("successfully add Product");
                    from.reset()
               }
          }).catch(e => {
               console.log(e);
               toast.error(e?.message)
          })
     }
     return (
          <div className=" md:px-14">
               <div>
                    <SectionTitle title={"Add new product"}></SectionTitle>




                    <div>

                         <form action="" onSubmit={handleSubmit}>
                              <div className=" w-full  py-2">
                                   <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name"> Product name</label>
                                   <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#5fa10371]" type="text" name="name" placeholder="Product name" id="" />
                              </div>
                              <div className=" w-full  py-2">
                                   <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name"> description</label>
                                   <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#5fa10371]" type="text" name="description" placeholder="Description" id="" />

                              </div>

                              <div className=" md:grid md:grid-cols-2 gap-4  items-center">
                                   <div className=" w-full  py-2">
                                        <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name"> brand</label>
                                        <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#5fa10371]" type="text" name="brand" placeholder="brand" id="" />

                                   </div>
                                   <div className=" w-full  py-2">
                                        <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name"> price</label>
                                        <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#5fa10371]" type="number" name="price" placeholder="price" id="" />

                                   </div>
                              </div>
                              <div className=" md:grid md:grid-cols-2 gap-4  items-center">
                                   <div className=" w-full  py-2">
                                        <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name"> discount</label>
                                        <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="number" name="discount" placeholder="discount" id="" />

                                   </div>
                                   <div className=" w-full  mt-6 py-2 ">
                                        <select onChange={(e) => setSelectData(e.target?.value)}
                                             className="py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]e"
                                        >
                                             {options.map((option) => (
                                                  <option key={option.value} value={option.value}>
                                                       {option.label}
                                                  </option>
                                             ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                             {/* Dropdown arrow icon (optional) */}
                                             <svg
                                                  className="fill-current h-4 w-4"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 20 20"
                                             >
                                                  <path d="M10 12L4 6h12l-6 6z" />
                                             </svg>
                                        </div>
                                   </div>

                              </div>
                              <div className=" md:grid md:grid-cols-2 gap-4  items-center">
                                   <div className=" w-full  py-2">
                                        <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name"> Occasion</label>
                                        <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#5fa10371]" type="text" name="Occasion" placeholder="Occasion" id="" />

                                   </div>
                                   <div className=" w-full  py-2">
                                        <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name"> Sleeve</label>
                                        <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#5fa10371]" type="text" name="Sleeve" placeholder="Sleeve" id="" />

                                   </div> </div>

                              <div className=" w-full  py-2">
                                   <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name"> Image-1</label>
                                   <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#5fa10371]" type="text" name="image1" placeholder="Ex: https://static-01.loagechi.com.com.bd/p/b049jpg_750x750.jpg_.webp" id="" />

                              </div>
                              <div className=" w-full  py-2">
                                   <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name">  Image-2</label>
                                   <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#5fa10371]" type="text" name="image2" placeholder="Ex: https://static-01.loagechi.com.com.bd/p/b049jpg_750x750.jpg_.webp" id="" />

                              </div>
                              <div className=" w-full  py-2">
                                   <label className=" block text-base md:text-xl capitalize  font-light py" htmlFor="name">  Image-3</label>
                                   <input required className="  py-2 px-3  w-full   outline-none  text-black  my-2 border  focus:border-[#5fa10371]  " type="text" name="image3" placeholder="Ex: https://static-01.loagechi.com.com.bd/p/b049jpg_750x750.jpg_.webp" id="" />

                              </div>

                              <button className="   primaryBg py-2 px-4 rounded text-white h hover:bg-[#60a103] " type="submit">Submit</button>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Add_product;