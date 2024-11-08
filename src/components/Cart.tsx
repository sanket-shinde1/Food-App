import { useSelector } from "react-redux";
// import MenuCard from "./MenuCard";

//Issue to render the data with the help of MenuCard Component need to reslove

const Cart = () => {
  const cardItems = useSelector((store: any) => store.cart.items);
  console.log(cardItems.menu.name);
  // const { name } = cardItems;

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {/* {cardItems.map((item: any) => (
          <p> {name}</p>
        ))} */}
      </div>
    </div>
  );
};

export default Cart;
