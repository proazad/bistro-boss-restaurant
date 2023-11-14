import { Helmet } from "react-helmet-async";
import PageCover from "../../Components/Header/PageCover";
import bg from "../../assets/shop/banner2.jpg";
import FoodTabs from "../../Components/FoodTabs/FoodTabs";
const OrderFood = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <PageCover
        img={bg}
        title={"Our Shop"}
        slugan={"Would you like to try a dish?"}
      />
      <div className="max-w-5xl  mx-auto my-16">
        <FoodTabs />
      </div>
    </>
  );
};

export default OrderFood;
