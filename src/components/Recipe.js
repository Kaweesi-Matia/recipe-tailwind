import React from 'react'
import RecipeRating from './RecipeRating';



function Recipe({data}) {
  return (
    <div className="card border rounded-lg overflow-hidden shadow-lg p-4 bg-white">
      <div>
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <h2 className="text-xl font-semibold mt-2 mb-1">{data.strMeal}</h2>
      <RecipeRating />
    </div>
  );
}


export default Recipe