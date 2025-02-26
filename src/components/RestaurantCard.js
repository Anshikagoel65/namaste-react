import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    return (
      <div className="mx-4 my-2 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-300">
        <img
          className="rounded-lg"
          src={
            CDN_URL + resData.info.cloudinaryImageId
          }
        />
        <h2 className="font-bold py-4 text-lg">{resData.info.name}</h2>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;