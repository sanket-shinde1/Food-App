import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState<any>(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId=24441"
    const json = await data.json();
    setResInfo(json.data);
    console.log(json);
    // console.log(json.data.cards[2].card.card.info.name);
  };
  if (resInfo === null) return <Shimmer />;

  const { name } = resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1 className="menu-res-name"> {name} </h1>
      <h2 className="menu-tag">Menu</h2>
      <ul className="list-dish">
        {itemCards.map((item: any) => (
          <p className="dish-border" key={item.card.info.id}>
            <MenuCard menu={item.card.info} />
          </p>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
