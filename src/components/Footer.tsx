
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">FundiBook</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting Kenya's talented service providers with clients who need their skills. 
              Building trust, one booking at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">WhatsApp</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Twitter</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Find Services</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Providers</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Join Now</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FundiBook. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
