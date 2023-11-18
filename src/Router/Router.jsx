import { createBrowserRouter } from "react-router-dom";
import Front from "../Layout/Front";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import OrderFood from "../Pages/OrderFood/OrderFood";
import OurMenu from "../Pages/OurMenu/OurMenu";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivterRoute from "./PrivterRoute";

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
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/secret",
        element: (
          <PrivterRoute>
            <Secret />
          </PrivterRoute>
        ),
      },
    ],
  },
]);

export default Router;
