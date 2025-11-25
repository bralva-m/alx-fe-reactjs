import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm('Delete this recipe?')) return;
    deleteRecipe(id);
    navigate('/');
  };

  return <button onClick={handleDelete} style={{ marginLeft: '8px' }}>Delete</button>;
};

export default DeleteRecipeButton;
