import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';

const RecipeCard = ({ recipe, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <Link
        to={`/recipe/${recipe.slug}`}
        className="block relative overflow-hidden rounded-lg h-64 md:h-80 group"
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-2xl md:text-3xl font-serif mb-2">
            {recipe.title}
          </h3>
          <p className="text-gray-200 text-sm">{recipe.description}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/recipe/${recipe.slug}`}
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-medium text-[#2C3E50]">
          {recipe.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-serif text-gray-800 mb-2 group-hover:text-[#E88B7C] transition-colors">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
