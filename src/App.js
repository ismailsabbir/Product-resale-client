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
          loader: async () => {
            return fetch(`${process.env.REACT_APP_HOST_LINK}/products`);
          },
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
          element: <PostAddPages></PostAddPages>,
        },
        {
          path: "/cart",
          element: <CartsPages></CartsPages>,
        },
        {
          path: "/checkout",
          element: <CheckOutPages></CheckOutPages>,
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
              element: <AdminDashborde></AdminDashborde>,
            },
            {
              path: "/dashboard/sealler",
              element: <SeallerDashborde></SeallerDashborde>,
            },
            {
              path: "/dashboard/buyers",
              element: <BuyersDashborde></BuyersDashborde>,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
