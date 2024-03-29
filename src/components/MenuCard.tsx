const MenuCard = (props: any) => {
  const menu = props;
  const dishImg =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";

  const { name, imageId, description, defaultPrice, price } = menu?.menu;

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
    </div>
  );
};

export default MenuCard;
