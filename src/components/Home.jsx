import { Link } from 'react-router-dom';
import recipechef from '../images/recipe_chef.webp';
import sampleRecipes from '../sampleRecipes';

const Home = () => {
  const types = ['Asian', 'European'];

  const topRecipes = sampleRecipes.slice(0, 3);

  return (
    <div className="container">
      <div className='row'>
    <div className="home">
      <div className='col-md-6'>
      <h1>Recipe Radar App</h1>
      </div>
      <img style={{width:"50%"}} className='col-md-6' src={recipechef} alt="" />
      </div>
      </div>
      <h2 className='text-center'>Categories</h2>
      <ul className="food-types">
        {types.map((type, index) => (
          <li key={index}>
            <Link to={`/type/${type.toLowerCase()}`} className='recipe-types'>{type}</Link>
          </li>
        ))}
      </ul>
      <h2 className='recipe-rated-center'>Most Popular Recipes</h2>
      <div className="top-recipes">
        {topRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`} className='view-btn'>View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
