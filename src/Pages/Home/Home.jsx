import Callus from "../../Components/Callus/Callus";
import ChefRecommends from "../../Components/ChefRecommends/ChefRecommends";
import ExtraSection from "../../Components/ExtraSection/ExtraSection";
import FromOurMenu from "../../Components/FromOurMenu/FromOurMenu";
import Menu from "../../Components/Menu/Menu";
import Testimonials from "../../Components/Testimonials/Testimonials";
import OrderOnline from "./OrderOnline/OrderOnline";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <OrderOnline />
      <ExtraSection />
      <Menu />
      <Callus />
      <ChefRecommends />
      <FromOurMenu />
      <Testimonials />
    </div>
  );
};

export default Home;
