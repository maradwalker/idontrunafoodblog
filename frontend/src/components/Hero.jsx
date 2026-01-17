import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = ({ recipe }) => {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-5">
        {/* Image Side */}
        <div className="col-span-1 md:col-span-3 relative overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
        </div>
        
        {/* Content Side */}
        <div className="col-span-1 md:col-span-2 bg-[#2C3E50] flex items-center justify-center p-8 md:p-12">
          <div className="text-center max-w-md">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight">
              {recipe.title}
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              {recipe.description}
            </p>
            <Link
              to={`/recipe/${recipe.slug}`}
              className="inline-flex items-center gap-2 bg-[#E88B7C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#d97a6b] transition-all hover:scale-105"
            >
              GET THE RECIPE
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
