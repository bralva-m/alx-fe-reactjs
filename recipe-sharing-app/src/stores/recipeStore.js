import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  // basic actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
  updateRecipe: (updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updated.id ? { ...r, ...updated } : r))
    })),
  setRecipes: (recipes) => set({ recipes }),

  // search / filter
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // favorites
  addFavorite: (id) =>
    set((state) => ({ favorites: Array.from(new Set([...state.favorites, id])) })),
  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((fid) => fid !== id) })),

  // recommendations (simple mock that returns recipes not yet favorited)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // naive recommendation: recipes that are not favorited
    const recommended = recipes.filter((r) => !favorites.includes(r.id)).slice(0, 5);
    return recommended;
  }
}));

export default useRecipeStore;