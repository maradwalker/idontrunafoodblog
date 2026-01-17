import React from 'react';
import Hero from '../components/Hero';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/mockRecipes';
import { ArrowRight, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const featuredRecipe = recipes.find(r => r.id === 1);
  const featuredCards = recipes.filter(r => r.featured && r.id !== 1).slice(0, 3);
  const latestRecipes = recipes.slice(3, 9);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero recipe={featuredRecipe} />

      {/* Featured Recipe Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCards.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} variant="featured" />
          ))}
        </div>
      </section>

      {/* Latest Recipes Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-serif text-gray-800 mb-2">LATEST RECIPES</h2>
          <div className="w-24 h-1 bg-[#E88B7C]"></div>
        </div>

        {/* Featured Post with Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12 bg-white rounded-lg overflow-hidden shadow-lg">
          <Link to={`/recipe/${latestRecipes[0].slug}`} className="relative h-96 lg:h-auto overflow-hidden group">
            <img
              src={latestRecipes[0].image}
              alt={latestRecipes[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                What I make when it's
                <br />
                <span className="text-6xl md:text-7xl font-bold">TOO HOT</span>
                <br />
                to cook
              </h3>
            </div>
          </Link>
          <div className="bg-gray-100 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#E88B7C] text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                {latestRecipes[0].category}
              </span>
              <Sun className="w-5 h-5 text-[#E88B7C]" />
              <span className="text-sm text-gray-600">{latestRecipes[0].publishDate}</span>
              <span className="text-sm text-gray-600">• {latestRecipes[0].comments} comments</span>
            </div>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Happy 2025 everyone! I'm taking leave until the end of the January, but popping in briefly to share a summer special recipe round-up. These are the recipes I make when it's too hot to cook!
            </p>
            <Link
              to={`/recipe/${latestRecipes[0].slug}`}
              className="inline-flex items-center gap-2 bg-[#E88B7C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d97a6b] transition-all hover:scale-105 self-start"
            >
              GET THE RECIPE
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestRecipes.slice(1).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2C3E50] py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Want more delicious recipes?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Explore our full collection of easy, flavorful recipes perfect for any occasion.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#E88B7C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#d97a6b] transition-all hover:scale-105 text-lg"
          >
            Browse All Recipes
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
