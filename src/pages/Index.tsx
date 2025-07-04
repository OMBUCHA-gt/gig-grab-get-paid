
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceCategories from '../components/ServiceCategories';
import FeaturedProviders from '../components/FeaturedProviders';
import HowItWorks from '../components/HowItWorks';
import PricingTiers from '../components/PricingTiers';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ServiceCategories />
      <FeaturedProviders />
      <HowItWorks />
      <PricingTiers />
      <Footer />
    </div>
  );
};

export default Index;
