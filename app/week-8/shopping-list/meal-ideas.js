import React, { useEffect, useState } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const mealsList = data.meals || [];
      setMeals(mealsList);
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
    }
  };

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Meal Ideas:</h2>
      <ul style={{ display: 'flex', listStyle: "none", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        {meals.map((meal) => (
          <li key={meal.idMeal} style={{ margin: "10px", textAlign: "center" }}>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "250px", height: "250px", objectFit: "cover", borderRadius: "8px", }} />
            <p style={{ marginTop: "10px", textAlign: 'center' }}>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
