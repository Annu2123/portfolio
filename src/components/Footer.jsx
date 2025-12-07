import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-gray-900 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-gray-500 flex items-center justify-center gap-2">
                    © {new Date().getFullYear()} Portfolio. Made with <Heart size={16} className="text-red-500 fill-red-500" /> by You.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
