import useRecipeStore from '../stores/recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search recipes..."
      style={{ display: 'block', width: '100%', margin: '10px 0' }}
    />
  );
};

export default SearchBar;