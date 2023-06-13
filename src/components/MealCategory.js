import React from "react";
import "../styles/categories.css";
import ChineseCategory from "../images/chinesefood.svg";

function MealCategory({categoryName}) {
  return (
    <div className="category-meal_img-container">
      <img src={ChineseCategory} alt="category-icon" />
      <p className="category-meal_name">{categoryName}</p>
    </div>
  );
}

export default MealCategory;