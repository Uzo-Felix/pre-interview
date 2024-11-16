import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Page not found
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-700 transition-colors"
      >
        Go to Homepage
      </button>
    </div>
  );
};
