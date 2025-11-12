import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] home-bg relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-8">
            Welcome to <span className="text-blue-400">MyApp</span>
          </h1>
          <p className="text-xl text-gray-200 mb-12">
            Your one-stop destination for amazing experiences. Join our community and discover
            what makes us special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors md:text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {[
            {
              title: 'Feature 1',
              description: 'Experience the best of what we have to offer with our premium features.'
            },
            {
              title: 'Feature 2',
              description: 'Connect with others and build meaningful relationships in our community.'
            },
            {
              title: 'Feature 3',
              description: 'Stay up to date with the latest trends and innovations in your field.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white border-opacity-20">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 