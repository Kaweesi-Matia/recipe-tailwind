import React, { useState } from 'react'

// RecipeRating.js
function RecipeRating() {
  const [rating, setRating] = useState();

  const handleSetRating = (e) => setRating(e.target.value);

  return (
    <>
      <p className="text-gray-700">Rating: {rating || 'Please select a rating'}</p>
      <select
        onChange={handleSetRating}
        className="border rounded px-2 py-1 mt-2"
      >
        <option value="">-- Select a rating --</option>
        <option value="4 😋">4 - It's super delicious!</option>
        <option value="3 😀">3 - I'll make it again</option>
        <option value="2 😐">2 - It needs work</option>
        <option value="1 🤢">1 - I'll never make this again</option>
      </select>
    </>
  );
}


export default RecipeRating