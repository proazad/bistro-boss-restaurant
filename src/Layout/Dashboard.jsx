import {
  FaCalendarCheck,
  FaHome,
  FaShopify,
  FaShoppingCart
} from "react-icons/fa";
import { MdContactPhone, MdMenu, MdOutlinePayments } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open bg-base-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-full bg-[#D1A054] text-base-content pt-10">
          <h2 className="text-4xl text-center font-bold ">Bistro Boss</h2>
          <h2 className="text-2xl font-semibold text-center">Restaurant</h2>
          <ul className="menu p-4 w-80 ">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard" className="text-xl">
                <FaHome></FaHome>
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation" className="text-xl">
                <FaCalendarCheck />
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymenthistory" className="text-xl">
                <MdOutlinePayments></MdOutlinePayments>
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart" className="text-xl">
                <FaShoppingCart /> My Cart
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/" className="text-xl">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="text-xl">
                <MdMenu></MdMenu>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/orderfood/salad" className="text-xl">
                <FaShopify></FaShopify>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-xl">
                <MdContactPhone />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
