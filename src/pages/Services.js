import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon: Icon, price }) => (
  <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white border-opacity-20 hover:transform hover:scale-105 transition-all duration-300">
    <div className="text-blue-400 mb-4">
      {Icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="text-2xl font-bold text-white mb-4">{price}</div>
    <Link
      to="/contact"
      className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md text-sm font-medium transition-colors"
    >
      Get Started
    </Link>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Basic Plan",
      description: "Perfect for small businesses and startups looking to establish their online presence.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      price: "$99/month"
    },
    {
      title: "Professional Plan",
      description: "Ideal for growing businesses that need advanced features and priority support.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      price: "$199/month"
    },
    {
      title: "Enterprise Plan",
      description: "Custom solutions for large organizations with complex requirements and dedicated support.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      price: "Contact Us"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] services-bg relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-8">
            Our Services
          </h1>
          <p className="text-xl text-gray-300">
            Choose the perfect plan for your business needs. All plans include our core features with different levels of support and customization.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8">
            Need a custom solution? Contact us to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services; 