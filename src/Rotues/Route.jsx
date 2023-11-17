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
import Payment from "../Dashboard/payment/Payment";
import ProductHistory from "../Dashboard/Producthistory/ProductHistory";
import WishList from "../Dashboard/WishList/WishList";
import Loading from "../Component/Loading/Loading";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import AdminDashboard from "../AdminDashboard/AdminDashbard";
import PaymentCard from "../Pages/PaymentCard/PaymentCard";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import ErrorPage from "../Component/ErrorPage/ErrorPage";


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
                    path: '/loading',
                    element: <Loading></Loading>
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
                              element: <Payment></Payment>
                         },
                         {
                              path: '/dashboard/history',
                              element: <ProductHistory></ProductHistory>
                         },
                         {
                              path: '/dashboard/wishlist',
                              element: <WishList></WishList>
                         },

                    ]
               }
          ]
     }
])
export default Route;