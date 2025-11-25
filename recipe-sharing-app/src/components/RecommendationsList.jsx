import useRecipeStore from '../stores/recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);
  const recommended = generateRecommendations();

  if (!recommended || recommended.length === 0) return <p>No recommendations right now.</p>;

  return (
    <div>
      <h2>Recommended</h2>
      {recommended.map((r) => (
        <div key={r.id} style={{ margin: '8px 0' }}>
          <h4>{r.title}</h4>
          <p>{r.description?.slice(0, 100)}</p>
          <Link to={`/recipe/${r.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;