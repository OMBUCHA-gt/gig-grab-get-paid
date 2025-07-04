
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const FeaturedProviders = () => {
  const providers = [
    {
      name: 'John Mwangi',
      service: 'Plumber & Electrician',
      rating: 4.9,
      reviews: 127,
      price: 'KES 1,500/hour',
      location: 'Nairobi, Westlands',
      image: '👨‍🔧',
      verified: true
    },
    {
      name: 'Grace Wanjiku',
      service: 'House Cleaner',
      rating: 4.8,
      reviews: 89,
      price: 'KES 2,000/session',
      location: 'Nairobi, Karen',
      image: '👩‍💼',
      verified: true
    },
    {
      name: 'David Kiprop',
      service: 'Math & Science Tutor',
      rating: 5.0,
      reviews: 156,
      price: 'KES 1,000/hour',
      location: 'Nairobi, Kilimani',
      image: '👨‍🎓',
      verified: true
    },
    {
      name: 'Mary Akinyi',
      service: 'Hair Stylist',
      rating: 4.7,
      reviews: 203,
      price: 'KES 3,000/session',
      location: 'Nairobi, CBD',
      image: '👩‍🎨',
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Service Providers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet some of our top-rated professionals ready to help you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                    {provider.image}
                  </div>
                  <div className="flex items-center justify-center mb-1">
                    <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                    {provider.verified && (
                      <span className="ml-2 text-green-600">✓</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{provider.service}</p>
                  <p className="text-xs text-gray-500">{provider.location}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm font-medium">{provider.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({provider.reviews})</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">{provider.price}</span>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
                  Book via WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
