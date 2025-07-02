import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 text-center text-gray-500 text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-2">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
