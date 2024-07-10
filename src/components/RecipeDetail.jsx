import React from 'react';
import { useParams } from 'react-router-dom';
// import css from '../index.css';
import sampleRecipes from '../sampleRecipes.js';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = sampleRecipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const instructionsArray = recipe.instructions.split('\n').map(instruction => instruction.trim());

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
      <h3>Ingredients</h3>
      <ul className="ingredients-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol className="instructions-list">
        {instructionsArray.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
