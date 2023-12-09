
import './Blog.css'
const Blog = () => {
     return (
          <div>
               <div className=" text-center mx-auto my-5">
                    <h1 className=" capitalize text-lg  md:text-2xl  primaryColor font-medium  ">  from the blogs</h1>
                    <h1 className=" capitalize">the freshest and most exciting news</h1>
               </div>
               <div className="  grid  items-center   md:gird xl:grid-cols-3 gap-7 md:grid-cols-2 ">


                    <div className="w-full p-2">
                         <div className=" blogImage">
                              <img src="https://demo-kalles-4-3.myshopify.com/cdn/shop/articles/beautiful-positive-young-female-sunglasses-enjoys-coconut-cocktail-outdoor-cafe-smiles-pleasantly-rejoices-having-summer-holidays-tropical-place-tastes-exotic-beverage-dess_e237336f-1_e25dc5af-9ad1-4e12-b4d4-c7035bcc7e04.jpg?v=1652116228&width=600" alt="" />
                              <div></div></div>
                         <div className=" my-3">
                              <p className=" text-base  md:text-lg font-medium  text-black">  <small className="  text-lg opacity-20">on</small> May 11, 2022</p>
                              <h1 className=" text-base  md:text-lg font-medium my-2"> Getting Ready With: Rebecca</h1>
                              <p className=" text-sm  ">We woke early at our house in Blairgowrie with lots of tears, excitement and jumping on the bed. The day...</p>
                         </div>
                    </div>
                    <div className="w-full p-2">
                         <div className=" blogImage">
                              <img src="https://demo-kalles-4-3.myshopify.com/cdn/shop/articles/blue-2564660_1920_540x_9c7b3959-022d-435e-846a-c9d4d6f37da3.jpg?v=1652116232&width=400" alt="" />
                              <div></div></div>
                         <div className=" my-3">
                              <p className=" text-base  md:text-lg font-medium  text-black">  <small className="  text-lg opacity-20">on</small> May 12, 2022</p>
                              <h1 className=" text-base  md:text-lg font-medium my-2">Style me: Chokers</h1>
                              <p className=" text-sm  ">Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists,... </p>
                         </div>
                    </div>
                    <div className="w-full p-2">
                         <div className=" blogImage">
                              <img src="https://demo-kalles-4-3.myshopify.com/cdn/shop/articles/pexels-andrea-piacquadio-974911_540x_0cfd4254-b100-40eb-aeab-6d217a775b7e.jpg?v=1652116230&width=400" alt="" />
                              <div></div></div>
                         <div className=" my-3">
                              <p className=" text-base  md:text-lg font-medium  text-black">  <small className="  text-lg opacity-20">on</small> May 11, 2022</p>
                              <h1 className=" text-base  md:text-lg font-medium my-2"> Earrings: Big Is Bold and Beautiful</h1>
                              <p className=" text-sm  ">Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists,...</p>
                         </div>
                    </div>
                   

               </div>



          </div>
     );
};

export default Blog;