import React from "react";

const Footer = () => {
  return (
    


    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p className="text-sm">Developed & Managed by <span className="font-bold">StarInfotech</span></p>
      <p className="text-xs">© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
