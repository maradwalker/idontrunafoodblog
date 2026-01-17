import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/mockRecipes';
import { Clock, Users, ChefHat, ArrowLeft, Printer, BookmarkPlus, Share2 } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';

const RecipeDetailPage = () => {
  const { slug } = useParams();
  const recipe = recipes.find(r => r.slug === slug);
  const [servings, setServings] = useState(recipe?.servings || 4);
  
  const relatedRecipes = recipes
    .filter(r => r.category === recipe?.category && r.id !== recipe?.id)
    .slice(0, 3);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-gray-800 mb-4">Recipe Not Found</h1>
          <Link to="/" className="text-[#E88B7C] hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E88B7C] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Recipes</span>
        </Link>
      </div>

      {/* Recipe Header */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="mb-6">
          <span className="inline-block bg-[#E88B7C] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            {recipe.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            {recipe.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{recipe.description}</p>
          
          <div className="flex items-center justify-between flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-6">
              <span>By {recipe.author}</span>
              <span>{recipe.publishDate}</span>
              <span>{recipe.comments} comments</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 hover:text-[#E88B7C] transition-colors">
                <Printer className="w-5 h-5" />
                Print
              </button>
              <button className="flex items-center gap-2 hover:text-[#E88B7C] transition-colors">
                <BookmarkPlus className="w-5 h-5" />
                Save
              </button>
              <button className="flex items-center gap-2 hover:text-[#E88B7C] transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Recipe Image */}
        <div className="rounded-lg overflow-hidden shadow-xl mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Recipe Meta Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="w-8 h-8 text-[#E88B7C] mx-auto mb-2" />
            <div className="text-sm text-gray-600 mb-1">Prep Time</div>
            <div className="font-semibold text-gray-800">{recipe.prepTime}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="w-8 h-8 text-[#E88B7C] mx-auto mb-2" />
            <div className="text-sm text-gray-600 mb-1">Cook Time</div>
            <div className="font-semibold text-gray-800">{recipe.cookTime}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-8 h-8 text-[#E88B7C] mx-auto mb-2" />
            <div className="text-sm text-gray-600 mb-1">Servings</div>
            <div className="font-semibold text-gray-800">{servings}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ChefHat className="w-8 h-8 text-[#E88B7C] mx-auto mb-2" />
            <div className="text-sm text-gray-600 mb-1">Difficulty</div>
            <div className="font-semibold text-gray-800">{recipe.difficulty}</div>
          </div>
        </div>

        {/* Ingredients & Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-serif text-gray-800 mb-4">Ingredients</h2>
              <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="text-gray-600">Servings:</span>
                <button
                  onClick={() => setServings(Math.max(1, servings - 1))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                >
                  -
                </button>
                <span className="font-semibold px-4">{servings}</span>
                <button
                  onClick={() => setServings(servings + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#E88B7C] mt-1.5">•</span>
                    <span className="text-gray-700 leading-relaxed">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif text-gray-800 mb-6">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#E88B7C] text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>

              {/* Recipe Notes */}
              {recipe.notes && (
                <div className="mt-8 p-6 bg-amber-50 border-l-4 border-[#E88B7C] rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">Recipe Notes</h3>
                  <p className="text-gray-700 leading-relaxed">{recipe.notes}</p>
                </div>
              )}

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-serif text-gray-800 mb-6">
            Leave a Comment
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="comment" className="block text-gray-700 mb-2">
                Your thoughts on this recipe
              </label>
              <textarea
                id="comment"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E88B7C] focus:border-transparent"
                placeholder="Share your experience with this recipe..."
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E88B7C] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E88B7C] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#E88B7C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d97a6b] transition-colors"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>

      {/* Related Recipes */}
      {relatedRecipes.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-gray-800 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedRecipes.map((relatedRecipe) => (
                <RecipeCard key={relatedRecipe.id} recipe={relatedRecipe} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RecipeDetailPage;
