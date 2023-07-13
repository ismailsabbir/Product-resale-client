import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Main from "./Layoutes/Main";
import Errorpages from "./CommonItem/ErrorPages/Errorpages";
import ServicesPages from "./Pages/ServicesPages/ServicesPages";
import ServicesDetailsPages from "./Pages/ServicesDetailsPages/ServicesDetailsPages";
import CartsPages from "./Pages/CartsPages/CartsPages";
import CheckOutPages from "./Pages/CheckOutPages/CheckOutPages";
import SignupPages from "./Pages/SignupPages/SignupPages";
import LoginPages from "./Pages/LoginPages/LoginPages";
import SpecificProductPages from "./Pages/SpecificProductPages/SpecificProductPages";
import PostAddPages from "./Pages/PostAddPages/PostAddPages";
import DashBoardPages from "./Pages/DashBoardPages/DashBoardPages";
import DashbordLayout from "./Layoutes/DashbordLayout";
import AdminDashborde from "./Pages/AdminDashborde/AdminDashborde";
import SeallerDashborde from "./Pages/SeallerDashborde/SeallerDashborde";
import BuyersDashborde from "./Pages/BuyersDashborde/BuyersDashborde";
import PrivetRoutes from "./Routes/PrivetRoutes";
import PaymentTypesPages from "./Pages/PaymentTypesPages/PaymentTypesPages";
import CartCheckOut from "./Pages/CartCheckOut/CartCheckOut";
import CartPaymentTypesPages from "./Pages/CartPaymentTypesPages/CartPaymentTypesPages";
import AdminRoutes from "./Routes/AdminRoutes/AdminRoutes";
import SellerRoutes from "./Routes/SellerRoutes/SellerRoutes";
import BuyerRoutes from "./Routes/BuyerRoutes/BuyerRoutes";
import AllUsers from "./Component/AllUsers/AllUsers";
import AllProduct from "./Component/AllProduct/AllProduct";
import AllOrders from "./Component/Allorders/AllOrders";
import AllCategory from "./Component/AllCategory/AllCategory";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          path: "/home",
          element: <HomePage></HomePage>,
        },
        {
          path: "/about",
          element: <></>,
        },
        {
          path: "/services",
          element: <ServicesPages></ServicesPages>,
        },
        {
          path: "/specificservice/:id",
          element: <SpecificProductPages></SpecificProductPages>,
          loader: async ({ params }) => {
            return fetch(
              `${process.env.REACT_APP_HOST_LINK}/allproduct/${params.id}`
            );
          },
        },
        {
          path: `/services/:id`,
          element: <ServicesDetailsPages></ServicesDetailsPages>,
          loader: async ({ params }) => {
            return fetch(
              `${process.env.REACT_APP_HOST_LINK}/products/${params.id}`
            );
          },
        },
        {
          path: "/postadd",
          element: (
            <PrivetRoutes>
              <PostAddPages></PostAddPages>
            </PrivetRoutes>
          ),
        },
        {
          path: "/cart",
          element: (
            <PrivetRoutes>
              <CartsPages></CartsPages>
            </PrivetRoutes>
          ),
        },
        {
          path: "/checkout",
          element: (
            <PrivetRoutes>
              <CheckOutPages></CheckOutPages>
            </PrivetRoutes>
          ),
        },
        {
          path: "/cartcheckout",
          element: (
            <PrivetRoutes>
              <CartCheckOut></CartCheckOut>
            </PrivetRoutes>
          ),
        },
        {
          path: "/checkout/:id/:quentity",
          element: (
            <PrivetRoutes>
              <CheckOutPages></CheckOutPages>
            </PrivetRoutes>
          ),
          loader: async ({ params }) => {
            return fetch(
              `${process.env.REACT_APP_HOST_LINK}/products/${params.id}`
            );
          },
        },
        {
          path: "/signup",
          element: <SignupPages></SignupPages>,
        },
        {
          path: "/login",
          element: <LoginPages></LoginPages>,
        },
        {
          path: "/payment",
          element: <PaymentTypesPages></PaymentTypesPages>,
        },
        {
          path: "/cartpayment",
          element: <CartPaymentTypesPages></CartPaymentTypesPages>,
        },
        {
          path: "*",
          element: <Errorpages></Errorpages>,
        },
        {
          path: "/dashboard",
          element: <DashbordLayout></DashbordLayout>,
          children: [
            {
              path: "/dashboard",
              element: <DashBoardPages></DashBoardPages>,
            },
            {
              path: "/dashboard/admin",
              element: (
                <AdminRoutes>
                  <AdminDashborde></AdminDashborde>
                </AdminRoutes>
              ),
            },
            {
              path: "/dashboard/admin/alluser",
              element: <AllUsers></AllUsers>,
            },
            {
              path: "/dashboard/admin/allproduct",
              element: <AllProduct></AllProduct>,
            },
            {
              path: "/dashboard/admin/allorders",
              element: <AllOrders></AllOrders>,
            },
            {
              path: "/dashboard/admin/category",
              element: <AllCategory></AllCategory>,
            },

            {
              path: "/dashboard/sealler",
              element: (
                <SellerRoutes>
                  <SeallerDashborde></SeallerDashborde>
                </SellerRoutes>
              ),
            },
            {
              path: "/dashboard/buyers",
              element: (
                <BuyerRoutes>
                  <BuyersDashborde></BuyersDashborde>
                </BuyerRoutes>
              ),
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
