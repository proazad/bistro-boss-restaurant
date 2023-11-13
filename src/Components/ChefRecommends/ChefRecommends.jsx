import slide1 from "../../assets/home/featured.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";
const ChefRecommends = () => {
  return (
    <div className="max-w-5xl mx-auto my-20">
      <SectionTitle subheading={"Should Try"} heading={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
        <div className="bg-base-200">
          <img src={slide1} alt="" />
          <div className="text-center p-5">
            <h3 className="text-2xl">Caeser Salad</h3>
            <p className="text-lg my-3">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline btn-warning border-0 border-b-4">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-base-200">
          <img src={slide1} alt="" />
          <div className="text-center p-5">
            <h3 className="text-2xl">Caeser Salad</h3>
            <p className="text-lg my-3">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline btn-warning border-0 border-b-4">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-base-200">
          <img src={slide1} alt="" />
          <div className="text-center p-5">
            <h3 className="text-2xl">Caeser Salad</h3>
            <p className="text-lg my-3">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline btn-warning border-0 border-b-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
