import { createBrowserRouter } from "react-router-dom";
import Front from "../Layout/Front";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";

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
    ],
  },
]);

export default Router;
