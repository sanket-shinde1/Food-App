import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RestaurantInfoInterface } from "../interfaces/RestaurantsInterface";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState<
    RestaurantInfoInterface[]
  >([]);

  const [searchRestaurants, setSearchRestaurants] = useState<
    RestaurantInfoInterface[]
  >([]);

  const [topRestaurants, setTopRestaurants] = useState(false);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setSearchRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurans = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestaurant(filteredRestaurans);
              setSearchRestaurants(filteredRestaurans);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filterList = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4.2
          );
          setSearchRestaurants(filterList);
          setTopRestaurants(true);
        }}
      >
        Top Rated Restaurants
      </button>
      {topRestaurants === true && (
        <>
          <h2 className="top-res"> Top Restaurants ⭐ for You !</h2>
          {/* <Link to="/">
            <button>back</button>
          </Link> */}
        </>
      )}
      {/* <div className="pure-veg">
        <input
          type="checkbox"
          className="veg-btn"
          onClick={() => {
            const vegList = listOfRestaurant.filter(
              (res) => res.info.veg === true
            );
            setListOfRestaurant(vegList);
            setTop(false);
          }}
        />
        {""}
        <p>Pure Veg</p>
        </div>*/}
      <div className="res-container">
        {searchRestaurants.length === 0 && <p>No result found</p>}

        {searchRestaurants.map((restaurant) => (
          <Link
            className="text-link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
