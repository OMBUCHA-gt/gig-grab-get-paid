
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Browse & Select',
      description: 'Find the perfect service provider from our verified professionals',
      icon: '🔍'
    },
    {
      number: '2',
      title: 'Book via WhatsApp',
      description: 'Click to chat and discuss your requirements directly',
      icon: '💬'
    },
    {
      number: '3',
      title: 'Pay Securely',
      description: 'Complete payment through M-Pesa integration',
      icon: '💳'
    },
    {
      number: '4',
      title: 'Get Service',
      description: 'Enjoy professional service and rate your experience',
      icon: '⭐'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting help has never been easier. Follow these simple steps to connect with professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
