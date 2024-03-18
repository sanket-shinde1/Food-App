// interface data {
//   resName: string;
// }

// const resObj = {
//   info: {
//     id: "89140",
//     name: "KFC",
//     cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
//     locality: "Wakad Road",
//     areaName: "Hinjawadi",
//     costForTwo: "₹400 for two",
//     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//     avgRating: 4.2,
//     parentId: "547",
//     avgRatingString: "4.2",
//     totalRatingsString: "10K+",
//     sla: {
//       deliveryTime: 32,
//       lastMileTravel: 5,
//       serviceability: "SERVICEABLE",
//       slaString: "30-35 mins",
//       lastMileTravelString: "5.0 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2024-03-18 04:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "40% OFF",
//       subHeader: "UPTO ₹80",
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   analytics: {},
//   cta: {
//     link: "https://www.swiggy.com/restaurants/kfc-wakad-road-hinjawadi-pune-89140",
//     type: "WEBLINK",
//   },
// };

const RestaurantCard = (props: any) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla: { slaString },
  } = resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
        alt="img-logo"
      />
      <h3 className="areaName">
        {name}, {areaName}
      </h3>
      <h4 className="rating"> ⭐ {avgRating} Rating </h4>
      <h4 className="cuisines"> {cuisines.join(", ")}</h4>
      <h4> Delivery {slaString}</h4>
      <h4> {costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
