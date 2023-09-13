import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Main/Main";
import Register from "../Acount/Register/Register";
import Login from "../Acount/Login/Login";


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
               }
          ]
     }
])
export default Route;