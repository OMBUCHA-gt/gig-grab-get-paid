
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const PricingTiers = () => {
  const tiers = [
    {
      name: 'Basic',
      price: 'KES 50',
      period: '/week',
      description: 'Perfect for starting professionals',
      features: [
        'Basic profile listing',
        'Contact via WhatsApp',
        'Up to 5 service categories',
        'Basic analytics'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Professional',
      price: 'KES 100',
      period: '/week',
      description: 'Most popular choice for established providers',
      features: [
        'Enhanced profile with photos',
        'Priority in search results',
        'Unlimited service categories',
        'Advanced analytics',
        'Customer review management',
        'WhatsApp automation tools'
      ],
      popular: true,
      color: 'border-green-500 ring-2 ring-green-500'
    },
    {
      name: 'Premium',
      price: 'KES 200',
      period: '/week',
      description: 'For high-volume service providers',
      features: [
        'All Professional features',
        'Featured listing placement',
        'Multiple business locations',
        'Team member profiles',
        'Advanced booking calendar',
        'Custom branding options',
        'Priority customer support'
      ],
      popular: false,
      color: 'border-gray-200'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your business. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card key={index} className={`relative ${tier.color} ${tier.popular ? 'transform scale-105' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${tier.popular 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-white border border-green-600 text-green-600 hover:bg-green-50'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Additional revenue through commission per successful booking
          </p>
          <p className="text-sm text-gray-500">
            5% commission on bookings + M-Pesa transaction fees apply
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
