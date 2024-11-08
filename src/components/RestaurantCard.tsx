// import { RestaurantInfoInterface } from "../interfaces/RestaurantsInterface";
import { IMG_URL } from "../utils/constants";
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = (props: any) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    sla: { slaString },
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_URL + cloudinaryImageId}
        alt="img-logo"
      />
      <h3 className="areaName">
        {name}, {areaName}
      </h3>
      <div className="rate-time">
        <div id="star">
          <AiFillStar style={{ color: "green" }}></AiFillStar>
        </div>
        <h4 className="rating"> {avgRating} Rating </h4>
        <h4 className="delivery-time"> {slaString}</h4>
      </div>
      <p className="cuisines"> {cuisines.join(", ")}</p>
    </div>
  );
};

//Higher order component
//input - RestaurantCard return RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard: any) => {
  return (props: any) => {
    return (
      <div>
        <label htmlFor="promotion">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
