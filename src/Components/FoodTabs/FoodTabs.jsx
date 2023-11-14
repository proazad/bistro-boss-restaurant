import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCart from "../FoodCart/FoodCart";
const FoodTabs = () => {
  const [menus, loading] = useMenu();
  const { category } = useParams();
  const categorys = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialIndex = categorys.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const salads = menus.filter((item) => item.category === "salad");
  const dessert = menus.filter((item) => item.category === "dessert");
  const soup = menus.filter((item) => item.category === "soup");
  const pizza = menus.filter((item) => item.category === "pizza");
  const drinks = menus.filter((item) => item.category === "drinks");
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-secondary"></span>
      </div>
    );
  }
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
      </TabList>

      <TabPanel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {salads.map((food, index) => (
            <FoodCart key={index} food={food} />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pizza.map((food, index) => (
            <FoodCart key={index} food={food} />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {soup.map((food, index) => (
            <FoodCart key={index} food={food} />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dessert.map((food, index) => (
            <FoodCart key={index} food={food} />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {drinks.map((food, index) => (
            <FoodCart key={index} food={food} />
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default FoodTabs;
