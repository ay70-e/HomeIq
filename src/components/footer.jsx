import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#c86e3e] text-white text-center py-6">
      <p className="mb-4 text-sm">
        &copy; 2025 <span className="font-semibold">Homeiq</span>. All rights reserved.
      </p>

      <div className="flex justify-center space-x-6">
        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300 ">
          <Facebook size={20} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
          <Twitter size={20} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
          <Instagram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
