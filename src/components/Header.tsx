
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-600">FundiBook</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Sign In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Join as Provider
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Sign In
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Join as Provider
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
