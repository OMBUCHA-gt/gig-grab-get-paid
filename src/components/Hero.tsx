
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with Trusted
            <span className="text-green-600 block">Local Service Providers</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find and book fundis, cleaners, tutors, and other freelancers in your area. 
            WhatsApp-based booking with M-Pesa payments made simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              Find a Service Provider
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
              Become a Provider
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-8 text-gray-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-sm">Service Providers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">2K+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
