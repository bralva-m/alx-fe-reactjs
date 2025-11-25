import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description || '');
    }
  }, [recipe]);

  if (!recipe) return <p>Recipe not found</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id, title, description });
    navigate(`/recipe/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
      <h2>Edit Recipe</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} style={{ display: 'block', margin: '8px 0', width: '100%' }} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ display: 'block', margin: '8px 0', width: '100%' }} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;