import React from 'react';
import { Heart } from 'lucide-react';
import { couple } from '../constants/data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-4">
            <Heart className="text-rose-400 mr-2" size={24} />
            <h2 className="text-xl font-semibold">
              {couple.brideFirstName} & {couple.groomFirstName}
            </h2>
          </div>
          <p className="text-gray-400 text-sm mb-4 text-center">
            "Love is patient, love is kind. It always protects, always trusts, always hopes, always perseveres."
          </p>
          <div className="border-t border-gray-800 w-full max-w-md pt-4 mt-4">
            <p className="text-gray-500 text-xs text-center">
              © {new Date().getFullYear()} | {couple.brideFirstName} & {couple.groomFirstName}'s Wedding
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;