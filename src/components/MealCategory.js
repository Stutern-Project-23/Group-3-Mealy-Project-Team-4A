import React from "react";
import "../styles/categories.css";

function MealCategory({categoryName, ChineseCategory}) {
  return (
    <div className="category-meal-container">
      <img src={ChineseCategory} alt="category-icon" />
      <p className="category-meal_name">{categoryName}</p>
    </div>
  );
}

export default MealCategory;
