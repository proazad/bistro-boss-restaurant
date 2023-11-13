import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect } from "react";

const OfferMenu = ({category}) => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data
          .filter((menu) => menu.category === category)
          .slice(0, 6);
        setMenu(popular);
      });
  }, [category]);
  return (
    <section className="max-w-5xl mx-auto my-16">
      <SectionTitle subheading={"Don't miss"} heading={"TODAY'S OFFER"} />
      <div className="grid grid-cols lg:grid-cols-2 gap-8 mt-16">
        {menus?.map((menu) => (
          <div key={menu._id} className="flex gap-4 ">
            <img
              src={menu.image}
              className="w-20 menu-img select-none"
              alt=""
            />
            <div>
              <h3 className="text-2xl">{menu.name}</h3>
              <p className="text-lg">{menu.recipe.slice(0, 50)}</p>
            </div>
            <div>
              <span className="text-lg text-yellow-700">${menu.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-5">
        <button className="btn btn-ghost btn-outline border-0 border-b-4">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </section>
  );
};

export default OfferMenu;
