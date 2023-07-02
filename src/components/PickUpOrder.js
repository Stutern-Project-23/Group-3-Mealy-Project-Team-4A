import React from "react";
import RestaurantCard from "./RestaurantCard";

import Monogram1 from "../images/monogram1.png";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Restuarant5 from "../images/rest4.png"
import star from "../images/star.svg"
function PickUpOrder() {
  const restaurants=useLoaderData()
  return (
    <div className='order-category_pickup order-category'>
      <h3>African Restaurants</h3>
      <div className="order-category_restaurant-cards">
      {restaurants.map((restaurant)=>(
           <RestaurantCard key={restaurant._id} StarImg={star} name={restaurant.name} price="400" Food={Restuarant5} Monogram={Monogram1} rating={4.6}/>
         ))}
      </div>
    </div>
  );
}
export async function loader(){
  try{
    const response= await  axios.get("https://mealyapp-bdev.onrender.com/api/v1/restaurant/keyword/?restaurants=Pickup")
    const  data=response.data.data.restaurants
    return data
  
  }
  catch(err){
    console.log(err)
    return null
  }
 
}

export default PickUpOrder;
