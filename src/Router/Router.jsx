import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Front from "../Layout/Front";
import AddItems from "../Pages/Dashboard/Admin/AddItems/AddItems";
import AllUser from "../Pages/Dashboard/Admin/AllUser/AllUser";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/Admin/UpdateItem/UpdateItem";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import OrderFood from "../Pages/OrderFood/OrderFood";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Secret from "../Pages/Secret/Secret";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
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
  {
    path: "dashboard",
    element: (
      <PrivterRoute>
        <Dashboard />
      </PrivterRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      // only Addmin Router
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);

export default Router;
