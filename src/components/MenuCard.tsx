import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuCard = (props: any) => {
  const menu = props;
  const dishImg =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";

  const { name, imageId, description, defaultPrice, price } = menu?.menu;

  const dispatch = useDispatch();
  const handleAddItem = (menu: any) => {
    dispatch(addItem(menu));
  };

  return (
    <div className="menu-container">
      <div className="dish-details">
        <h2 className="menu-dish"> {name} </h2>
        <h3 className="dish-price"> ₹ {defaultPrice / 100 || price / 100}</h3>
        <div>{description}</div>
      </div>
      <div className="dish-img">
        <img src={dishImg + imageId} alt="logo" height={100} />
      </div>
      <button
        style={{ height: 20, marginTop: 50 }}
        onClick={() => handleAddItem(menu)}
      >
        Add+
      </button>
    </div>
  );
};

export default MenuCard;
