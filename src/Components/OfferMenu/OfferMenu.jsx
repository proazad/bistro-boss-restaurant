import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../SectionTitle/SectionTitle";

// eslint-disable-next-line react/prop-types
const OfferMenu = ({ category, subheading, heading }) => {
  const [menus, loading] = useMenu();
  const filterItems = menus
    .filter((menu) => menu.category === category)
    .slice(0, 6);
  if (loading) {
    return (
      <div className="text-center my-5">
        <span className="loading loading-spinner loading-lg text-secondary"></span>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto my-16">
      {subheading && <SectionTitle subheading={subheading} heading={heading} />}
      <div className="grid grid-cols lg:grid-cols-2 gap-8 mt-16">
        {filterItems?.map((menu) => (
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
        <Link
          to={`/orderfood/${category}`}
          className="btn btn-ghost btn-outline border-0 border-b-4"
        >
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </section>
  );
};

export default OfferMenu;
