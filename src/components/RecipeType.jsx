import { useParams } from 'react-router-dom';
import RecipeList from '../components/RecipeList.jsx';
import sampleRecipes from '../sampleRecipes.js';

const RecipeType = () => {
  const { type } = useParams();
  const recipes = sampleRecipes.filter((recipe) => recipe.type === type);

  return (
    <div className="recipe-type">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Recipes</h2>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipeType;
