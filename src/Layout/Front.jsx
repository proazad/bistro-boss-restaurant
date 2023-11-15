import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Front = () => {
  const location = useLocation();
  const showHeaderFooter =
    location.pathname.includes("signup") || location.pathname.includes("signin");
  return (
    <>
      {showHeaderFooter || <Header />}
      <Outlet />
      {showHeaderFooter || <Footer />}
    </>
  );
};

export default Front;
