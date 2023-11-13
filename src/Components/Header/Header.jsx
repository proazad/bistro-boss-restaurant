import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MenuBanner from "./MenuBanner";
import Slider from "./Slider";
const Header = () => {
  const location = useLocation();

  return (
    <header className="relative">
      <Navbar />
      {location.pathname ==='/' &&  <Slider />}
      {location.pathname ==='/menu' &&  <MenuBanner />}
    </header>
  );
};

export default Header;
