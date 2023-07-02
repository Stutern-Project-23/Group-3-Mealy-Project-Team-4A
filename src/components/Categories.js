import React from "react";
import "../styles/categories.css";
import MealCategory from "./MealCategory";
import OrderCategory from "./OrderCategory";
import Chinese from "../images/chinesefood.svg"
import African from "../images/cat1.png"
import Breakfast from "../images/cat2.png"
import Lunch from "../images/cat3.png"
import ComboMeals from "../images/cat4.png"
function Categories() {
  return (
    <section className="categories-section homepage-padding">
      <h3>All Categories</h3>
      <div className="categories-section_meal">
        <MealCategory categoryName="Chinese" ChineseCategory={Chinese} />
        <MealCategory categoryName="African" ChineseCategory={African} />
        <MealCategory categoryName="Breakfast" ChineseCategory={Breakfast} />
        <MealCategory categoryName="Lunch" ChineseCategory={Lunch} />
        <MealCategory categoryName="Combo meals" ChineseCategory={ComboMeals} />
      </div>
      <OrderCategory />
    </section>
  );
}

export default Categories;
