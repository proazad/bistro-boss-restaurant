import img from "../../assets/menu/banner3.jpg";
const MenuBanner = () => {
  return (
    <div
      className="parallax2 select-none flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="w-1/2 py-16 px-20 parallax-inner uppercase">
        <h4 className="text-white text-7xl font-bold mb-4">OUR MENU</h4>
        <p className="text-2xl uppercase text-white mb-5">
          Would you like to try a dish?
        </p>
      </div>
    </div>
  );
};

export default MenuBanner;
