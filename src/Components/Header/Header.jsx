import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Slider from "./Slider";
const Header = () => {
  const location = useLocation();

  return (
    <header className="relative">
      <Navbar />
      {location.pathname === "/" && <Slider />}
    </header>
  );
};

export default Header;
