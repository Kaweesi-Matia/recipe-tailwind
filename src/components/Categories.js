import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";


function Categories() {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Seafood");
  
    useEffect(() => {
      fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + selectedCategory
      )
        .then(response => response.json())
        .then(data => setRecipes(data.meals))
        .catch(error => console.error("Error:", error));
    }, [selectedCategory]);
  
    useEffect(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(data => setCategories(data.categories))
        .catch(error => console.error("Error:", error));
    }, []);
  
    const handleSelectChange = event => {
      setSelectedCategory(event.target.value);
    };
  
   // Categories.js
return (
  <>
    <h1 className="text-2xl font-bold text-center my-4">My Favorite Recipes</h1>
    <div className="categories text-center mb-6">
      <label htmlFor="categorySelect" className="mr-2 font-semibold">Select Category:</label>
      <select
        id="categorySelect"
        value={selectedCategory}
        onChange={handleSelectChange}
        className="border rounded px-2 py-1"
      >
        {categories.map(category => (
          <option value={category.strCategory} key={category.idCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
    <div className="container grid gap-4 sm:grid-cols-2 md:grid-cols-3 mx-auto">
      {recipes.map(recipe => (
        <Recipe data={recipe} key={recipe.idMeal} />
      ))}
    </div>
  </>
);

}

export default Categories