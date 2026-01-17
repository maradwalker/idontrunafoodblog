import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/mockRecipes';

const FavoritesPage = () => {
  // For now, show featured recipes as favorites
  const favoriteRecipes = recipes.filter(r => r.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#2C3E50] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Heart className="w-16 h-16 text-[#E88B7C] mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            My Favorites
          </h1>
          <p className="text-gray-300 text-lg">
            The recipes I make again and again
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {favoriteRecipes.length > 0 ? (
          <>
            <div className="mb-8">
              <p className="text-gray-600 text-lg">
                These are the tried-and-true recipes that have become staples in my kitchen. 
                Each one has been tested multiple times and loved by family and friends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
              <h2 className="text-3xl font-serif text-gray-800 mb-4">
                Want to see more recipes?
              </h2>
              <p className="text-gray-600 mb-6">
                Browse our complete collection of delicious recipes
              </p>
              <Link
                to="/recipes"
                className="inline-flex items-center gap-2 bg-[#E88B7C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#d97a6b] transition-all hover:scale-105"
              >
                View All Recipes
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-serif text-gray-800 mb-4">
              No favorites yet
            </h2>
            <p className="text-gray-600 mb-8">
              Start exploring recipes and save your favorites!
            </p>
            <Link
              to="/recipes"
              className="inline-flex items-center gap-2 bg-[#E88B7C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#d97a6b] transition-all hover:scale-105"
            >
              Browse Recipes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
