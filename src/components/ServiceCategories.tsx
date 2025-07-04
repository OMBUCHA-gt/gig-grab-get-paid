
import React from 'react';
import { Card, CardContent } from './ui/card';

const ServiceCategories = () => {
  const categories = [
    {
      name: 'Fundis',
      description: 'Plumbers, electricians, carpenters, and repair specialists',
      icon: '🔧',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Cleaners',
      description: 'House cleaning, office cleaning, and deep cleaning services',
      icon: '🧹',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Tutors',
      description: 'Academic tutoring, language lessons, and skill development',
      icon: '📚',
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Beauty & Wellness',
      description: 'Hair stylists, makeup artists, and wellness practitioners',
      icon: '💄',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      name: 'Delivery & Transport',
      description: 'Package delivery, moving services, and transportation',
      icon: '🚚',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      name: 'Tech Support',
      description: 'Computer repair, phone repair, and IT services',
      icon: '💻',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Service Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the right professional for your needs from our wide range of service categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center text-2xl mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
