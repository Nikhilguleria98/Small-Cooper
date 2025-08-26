import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            {/* Replace with your logo image */}
            <img
              src="Vector 2.png"
              alt="Small Copper Logo"
              className="w-10 h-10"
            />
            <h2 className="text-lg font-semibold">
              Small <br /> Copper
            </h2>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Services</a></li>
            <li><a href="#" className="hover:text-orange-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cloud & DevOps</li>
            <li>AI & Machine Learning</li>
            <li>UI/UX Design</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <p>Address</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: hello@smallcopper.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© 2025 Small Copper. All Rights Reserved.</p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-orange-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-orange-400"><FaTwitter /></a>
          <a href="#" className="hover:text-orange-400"><FaInstagram /></a>
          <a href="#" className="hover:text-orange-400"><FaGithub /></a>
          <a href="#" className="hover:text-orange-400"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
