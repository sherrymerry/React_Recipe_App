import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <h3>{recipe.title}</h3>
          <Link to={`/recipe/${recipe.id}`} className="view-recipe-btn">View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
