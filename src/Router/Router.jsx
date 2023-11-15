import { createBrowserRouter } from "react-router-dom";
import Front from "../Layout/Front";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import OrderFood from "../Pages/OrderFood/OrderFood";
import OurMenu from "../Pages/OurMenu/OurMenu";
import SignUp from "../Pages/SignUp/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Front />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/orderfood/:category",
        element: <OrderFood />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default Router;
