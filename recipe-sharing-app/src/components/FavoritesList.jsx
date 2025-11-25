import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((s) => s.favorites);
  const recipes = useRecipeStore((s) => s.recipes);

  const favRecipes = favorites.map((id) => recipes.find((r) => r.id === id)).filter(Boolean);

  if (favRecipes.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favRecipes.map((r) => (
        <div key={r.id} style={{ border: '1px solid #ddd', margin: '8px 0', padding: '8px' }}>
          <h3>{r.title}</h3>
          <p>{r.description?.slice(0, 120)}</p>
          <Link to={`/recipe/${r.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;