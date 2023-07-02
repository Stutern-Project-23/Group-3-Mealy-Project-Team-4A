import RestaurantCard from "./RestaurantCard";
import "../styles/categories.css";
import Monogram from "../images/monogram.svg";

import Restuarant1 from "../images/rest1.png";
import star from "../images/star.svg"
import axios from "axios";
import { useLoaderData } from "react-router-dom";

function DeliveryOrder() {

  const restaurants=useLoaderData()
  console.log(restaurants.length)

  return (
    <div className="order-category_delivery order-category">
      <h3>All Restaurants</h3>
     
      <div className="order-category_restaurant-cards">
         {restaurants.map((restaurant)=>(
           <RestaurantCard key={restaurant._id} StarImg={star} name={restaurant.name} price="400" Food={Restuarant1} Monogram={Monogram} rating={4.6}/>
         ))}
      </div>

    </div>
  );
}
export async function loader(){
  try{
    const response= await  axios.get("https://mealyapp-bdev.onrender.com/api/v1/restaurant/keyword/?restaurants=Delivery")
    const  data=response.data.data.restaurants
    return data
  
  }
  catch(err){
    console.log(err)
    return null
  }
 
}



export default DeliveryOrder;
