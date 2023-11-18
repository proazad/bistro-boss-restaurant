import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
const Menu = () => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((menu) => menu.category === "popular");
        setMenu(popular);
      });
  }, []);
  return (
    <div className="max-w-5xl mx-auto my-16">
      <SectionTitle subheading="Check it out" heading="FROM OUR MENU" />
      <div className="grid grid-cols lg:grid-cols-2 gap-8 mt-16">
        {menus?.map((menu) => (
          <div key={menu._id} className="flex gap-4 ">
            <img
              src={menu.image}
              className="w-20 menu-img select-none"
              alt=""
            />
            <div>
              <h3 className="text-3xl">{menu.name}</h3>
              <p className="text-lg">{menu.recipe}</p>
            </div>
            <div>
              <span className="text-lg text-yellow-700">${menu.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-5">
        <Link
          to="/menu"
          className="btn btn-ghost btn-outline border-0 border-b-4"
        >
          Veiw Full Menu
        </Link>
      </div>
    </div>
  );
};

export default Menu;
