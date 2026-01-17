import React from 'react';
import { Heart, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#2C3E50] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            About This Blog
          </h1>
          <p className="text-gray-300 text-lg">
            A collection of delicious recipes for everyday cooking
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-serif text-gray-800 mb-6">Welcome!</h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Welcome to <span className="text-[#E88B7C] font-medium">i don't run a food blog</span> - 
              your go-to destination for easy, delicious recipes that actually work. We believe cooking 
              should be fun, approachable, and stress-free.
            </p>

            <h3 className="text-2xl font-serif text-gray-800 mb-4 mt-8">Our Philosophy</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every recipe here is tested, refined, and designed to work in real home kitchens. 
              We focus on:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#E88B7C] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Simple ingredients you can find at any grocery store</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#E88B7C] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Clear, step-by-step instructions that anyone can follow</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#E88B7C] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Recipes that taste amazing without complicated techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#E88B7C] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Honest reviews and tips based on real cooking experiences</span>
              </li>
            </ul>

            <h3 className="text-2xl font-serif text-gray-800 mb-4 mt-8">What You'll Find Here</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              From quick weeknight dinners to impressive dishes for special occasions, our recipes cover 
              a wide range of cuisines and dietary preferences. Whether you're a beginner or an experienced 
              cook, you'll find something delicious to make.
            </p>

            <div className="bg-amber-50 border-l-4 border-[#E88B7C] p-6 rounded mt-8">
              <h4 className="font-semibold text-gray-800 mb-2">Fun Fact</h4>
              <p className="text-gray-700">
                The name "i don't run a food blog" comes from the ironic twist that, well, this is indeed 
                a food blog! We like to keep things light-hearted and not take ourselves too seriously.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-serif text-gray-800 mb-6 text-center">Get in Touch</h2>
          <p className="text-gray-700 text-center mb-8">
            Have a question about a recipe? Want to share your cooking success? We'd love to hear from you!
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-3 text-[#E88B7C] hover:text-[#d97a6b] transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="text-lg">hello@example.com</span>
            </a>
            
            <div className="flex items-center gap-6 pt-4">
              <a href="#" className="text-gray-600 hover:text-[#E88B7C] transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#E88B7C] transition-colors">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#E88B7C] transition-colors">
                <Youtube className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
