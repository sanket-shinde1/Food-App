import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo: any = useRestaurantMenu(resId);

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
