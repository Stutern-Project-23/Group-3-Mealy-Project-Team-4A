import React from "react";
import RestaurantCard from "./RestaurantCard";
import Restuarant5 from "../images/rest5.png";
import Monogram1 from "../images/monogram1.png";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
function BulkOrder() {
  const restaurants=useLoaderData()
  console.log(restaurants)
  return (
    <div className="order-category_pickup order-category">
      <h3>Featured Restaurants</h3>
      <div className="order-category_restaurant-cards">
      {restaurants.map((restaurant)=>(
           <RestaurantCard key={restaurant._id} name={restaurant.name} price="400" Food={Restuarant5} Monogram={Monogram1} rating={4.6}/>
         ))}
   
      <RestaurantCard
          name="Breakfast Hub"
          rating="4.6"
          price="400"
          Monogram={Monogram1}
          Food={Restuarant5}
        />  <RestaurantCard
        name="Breakfast Hub"
        rating="4.6"
        price="400"
        Monogram={Monogram1}
        Food={Restuarant5}
      />  <RestaurantCard
      name="Breakfast Hub"
      rating="4.6"
      price="400"
      Monogram={Monogram1}
      Food={Restuarant5}
    />  <RestaurantCard
    name="Breakfast Hub"
    rating="4.6"
    price="400"
    Monogram={Monogram1}
    Food={Restuarant5}
  />  <RestaurantCard
  name="Breakfast Hub"
  rating="4.6"
  price="400"
  Monogram={Monogram1}
  Food={Restuarant5}
/>  <RestaurantCard
          name="Breakfast Hub"
          rating="4.6"
          price="400"
          Monogram={Monogram1}
          Food={Restuarant5}
        />  <RestaurantCard
        name="Breakfast Hub"
        rating="4.6"
        price="400"
        Monogram={Monogram1}
        Food={Restuarant5}
      />  <RestaurantCard
      name="Breakfast Hub"
      rating="4.6"
      price="400"
      Monogram={Monogram1}
      Food={Restuarant5}
    />  <RestaurantCard
    name="Breakfast Hub"
    rating="4.6"
    price="400"
    Monogram={Monogram1}
    Food={Restuarant5}
  />
  </div>
    </div>
  );
}
export async function loader(){
  try{
    const response= await  axios.get("https://mealyapp-bdev.onrender.com/api/v1/restaurant/keyword/?restaurants=Bulk")
    const  data=response.data.data.restaurants
    return data
  
  }
  catch(err){
    console.log(err)
    return null
  }
 
}

export default BulkOrder;
