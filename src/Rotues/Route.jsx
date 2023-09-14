import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Main/Main";
import Register from "../Acount/Register/Register";
import Login from "../Acount/Login/Login";
import Product from "../Pages/Product/Product";


const Route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/account/register',
                    element: <Register></Register>
               },
               {
                    path: '/account/login',
                    element: <Login></Login>
               },
               {
                    path: '/product/:id',
                    element: <Product></Product>,
                    loader:({params})=> fetch(`http://localhost:5000/product/${params.id}`)
               }
          ]
     }
])
export default Route;