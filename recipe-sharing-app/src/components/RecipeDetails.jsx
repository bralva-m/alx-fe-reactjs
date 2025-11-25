import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);
  const favorites = useRecipeStore((s) => s.favorites);
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found</p>;

  const isFav = favorites.includes(id);

  return (
    <div style={{ padding: '12px' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '10px' }}>Back</button>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '10px' }}>
        {isFav ? (
          <button onClick={() => removeFavorite(id)}>Remove from Favorites</button>
        ) : (
          <button onClick={() => addFavorite(id)}>Add to Favorites</button>
        )}

        <DeleteRecipeButton id={id} />
      </div>
    </div>
  );
};

export default RecipeDetails;