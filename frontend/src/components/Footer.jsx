import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="text-center mb-12 pb-12 border-b border-gray-600">
          <h3 className="text-3xl font-serif mb-4">Hungry for more?</h3>
          <p className="text-gray-300 mb-6">Subscribe to get new recipes delivered to your inbox!</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E88B7C]"
            />
            <button className="bg-[#E88B7C] text-white px-8 py-3 rounded-md font-medium hover:bg-[#d97a6b] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-serif text-xl mb-4">About</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#E88B7C] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E88B7C] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E88B7C] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Recipes</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#E88B7C] transition-colors">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E88B7C] transition-colors">
                  Quick & Easy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E88B7C] transition-colors">
                  Healthy Options
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#E88B7C] transition-colors">
                  Kitchen Tips
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E88B7C] transition-colors">
                  Cooking Videos
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E88B7C] transition-colors">
                  Meal Plans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-[#E88B7C] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#E88B7C] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#E88B7C] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#E88B7C] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-600 text-gray-400 text-sm">
          <p>&copy; 2025 i don't run a food blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
