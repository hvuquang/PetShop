import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import AddFood from "./pages/AddFoodPage/AddFood";
import Home from "./pages/PetPage/Home";
import Service from "./pages/ServicePage/Service";
import Food from "./pages/FoodPage/Food";
import Accessory from "./pages/AccessoryPage/Accessory";
import DogDetail from "./pages/DogDetail/DogDetail";
import LogIn from "./pages/LoginPage/LogIn";
import FoodDetail from "./pages/FoodDetail/FoodDetail";
<<<<<<< Updated upstream
=======
import AccessoryDetail from "./pages/AccessoryDetail/AccessoryDetail"
import AddService from "./pages/AddService/AddService";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import CartPage from "./pages/CartPage/CartPage"
import ReportPage from "./pages/ReportPage/ReportPage";
import Register from "./pages/RegisterPage/Register";
>>>>>>> Stashed changes

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registerAccount",
    element: <Register />,
    errorElement: <ErrorPage />,
  }
  ,
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/petpage",
        element: <Home />,
      },
      {
        path: "/servicepage",
        element: <Service />,
      },
      {
        path: "/foodpage",
        element: <Food />,
      },
      {
        path: "/accessorypage",
        element: <Accessory />,
      },
    ],
  },
  {
    path: "/petpage/:id",
    element: <DogDetail />,
    params: ":id"
  },
  {
    path: "/foodpage/:id",
    element: <FoodDetail />,
    params: ":id"
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
