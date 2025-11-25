import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);
  const searchTerm = useRecipeStore((s) => s.searchTerm);

  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) return <p>No recipes yet</p>;

  return (
    <div>
      {filtered.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '8px 0' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description?.slice(0, 150)}</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link to={`/recipe/${recipe.id}`}>View</Link>
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;