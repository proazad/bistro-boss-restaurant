import { AiOutlineUser } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink to="/" className="uppercase text-white active:text-yellow-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="uppercase text-white font-semibold ">
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="uppercase text-white font-semibold">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="uppercase text-white font-semibold">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className="uppercase text-white font-semibold">
          Our Shop
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black/30 absolute top-0 z-20">
      <div className="container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <Link className="uppercase text-xl font-bold text-white select-none">
            <span className="text-2xl">Bistro Boss</span> <br />
            <span>Restaurant</span>
          </Link>
        </div>

        <div className="navbar-center ms-auto hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm badge-info indicator-item">
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full">
                <AiOutlineUser className="text-3xl text-white" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
