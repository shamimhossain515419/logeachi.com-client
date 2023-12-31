import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Main/Main";
import Register from "../Acount/Register/Register";
import Login from "../Acount/Login/Login";
import Product from "../Pages/Product/Product";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import MainDashboard from "../Dashboard/MainDasgboard/MainDashbaord";
import Profile from "../Dashboard/Profile/Profile";
import Setting from "../Dashboard/setting/Setting";
import Shopping from "../Dashboard/Shoping/Shopping";
import ProductHistory from "../Dashboard/Producthistory/ProductHistory";
import WishList from "../Dashboard/WishList/WishList";
import Loading from "../Component/Loading/Loading";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import AdminDashboard from "../AdminDashboard/AdminDashbard";
import PaymentCard from "../Pages/PaymentCard/PaymentCard";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import PaymentState from "../Dashboard/payment/Payment";
import FailPayment from "../Dashboard/payment/FailPayment/FailPayment";
import PaymentHistory from "../Component/PaymentHistory/PaymentHistory";
import Subscript from "../Component/Subscript/Subscript";
import Message from "../Component/message/Message";
import Oderprosses from "../Component/OrderProsses/Oderprosses";
import Add_product from "../Dashboard/Add-Prodcut/Add_product";


const Route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
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
                    path: '/product/category',
                    element: <CategoryProduct></CategoryProduct>
               },
               {
                    path: '/account/login',
                    element: <Login></Login>
               },
               {
                    path: "/payment/success/:id",
                    element: <PaymentState></PaymentState>
               },
               {
                    path: "/payment/fail/:id",
                    element: <FailPayment></FailPayment>
               },
               {
                    path: "/order-process",
                    element: <Oderprosses></Oderprosses>
               },
               {
                    path: '/product/:id',
                    element: <Product></Product>,
                    loader: ({ params }) => fetch(`https://logeachi-com-server.vercel.app/product/${params.id}`)
               },
               {
                    path: '/dashboard/paymentcard/:id',
                    element: <PrivateRoute> <PaymentCard></PaymentCard></PrivateRoute>
               },
               {
                    path: '/dashboard',
                    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
                    children: [
                         {
                              path: '/dashboard',
                              element: <MainDashboard></MainDashboard>
                         },
                         {
                              path: '/dashboard/admin',
                              element: <AdminDashboard></AdminDashboard>
                         },
                         {
                              path: '/dashboard/profile',
                              element: <Profile></Profile>
                         },
                         {
                              path: '/dashboard/setting',
                              element: <Setting></Setting>
                         },
                         {
                              path: '/dashboard/shopping',
                              element: <Shopping></Shopping>
                         },
                         {
                              path: '/dashboard/payment',
                              element: <PaymentHistory></PaymentHistory>
                         },
                         {
                              path: '/dashboard/history',
                              element: <ProductHistory></ProductHistory>
                         },
                         {
                              path: '/dashboard/wishlist',
                              element: <WishList></WishList>
                         },
                         {
                              path: '/dashboard/subscribe',
                              element: <Subscript></Subscript>
                         },
                         {
                              path: '/dashboard/add-product',
                              element: <Add_product></Add_product>
                         },
                         {
                              path: '/dashboard/massage',
                              element:<PrivateRoute> <Message></Message></PrivateRoute>, 
                         },

                    ]
               }
          ]
     }
])
export default Route;