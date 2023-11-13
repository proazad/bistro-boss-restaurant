import { Helmet } from "react-helmet-async";
import OfferMenu from "../../Components/OfferMenu/OfferMenu";
import SectionParallax from "../../Components/SectionParallax/SectionParallax";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";
const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <OfferMenu category="dessert"/>
      <SectionParallax
      img={dessert}
        title={"DESSERTS"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <OfferMenu category="dessert"/>
      <SectionParallax
      img={pizza}
        title={"Pizza"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <OfferMenu category="pizza"/>
      <SectionParallax
      img={salad}
        title={"SALADS"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <OfferMenu category="salad"/>
      <SectionParallax
      img={soup}
        title={"Soup"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <OfferMenu category="soup"/>
    </div>
  );
};

export default OurMenu;
