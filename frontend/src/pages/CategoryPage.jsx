import React from 'react';
import { Link } from 'react-router-dom';
import { recipes, categories } from '../data/mockRecipes';
import { ChefHat, Clock, Users, Utensils } from 'lucide-react';

const CategoryPage = () => {
  const getCategoryRecipeCount = (category) => {
    if (category === 'All Recipes') return recipes.length;
    return recipes.filter(r => r.category === category).length;
  };

  const getCategoryImage = (category) => {
    const categoryRecipe = recipes.find(r => r.category === category);
    return categoryRecipe?.image || recipes[0].image;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#2C3E50] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Browse by Category
          </h1>
          <p className="text-gray-300 text-lg">
            Explore recipes organized by type and cuisine
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.filter(cat => cat !== 'All Recipes').map((category) => (
            <Link
              key={category}
              to="/recipes"
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={getCategoryImage(category)}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-serif mb-2">{category}</h3>
                  <p className="text-gray-200 text-sm">
                    {getCategoryRecipeCount(category)} recipe{getCategoryRecipeCount(category) !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <div className="p-5 bg-white group-hover:bg-gray-50 transition-colors">
                <span className="text-[#E88B7C] text-sm font-medium group-hover:underline">
                  View Recipes →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ChefHat className="w-10 h-10 text-[#E88B7C] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800 mb-1">{recipes.length}</div>
            <div className="text-gray-600 text-sm">Total Recipes</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="w-10 h-10 text-[#E88B7C] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800 mb-1">Quick</div>
            <div className="text-gray-600 text-sm">Easy to Make</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-10 h-10 text-[#E88B7C] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800 mb-1">Family</div>
            <div className="text-gray-600 text-sm">Friendly Portions</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Utensils className="w-10 h-10 text-[#E88B7C] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-800 mb-1">Tested</div>
            <div className="text-gray-600 text-sm">Kitchen Approved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
