import React from "react";
import { NavLink } from "react-router-dom";

function Start() {
  return (
    <div className="flex flex-col md:flex-row mt-28 mx-4 h-screen text-white bg-gray-900 font-serif">
      <div className="w-full md:w-1/4 h-full bg-gray-800 p-4 overflow-y-auto shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Components</h2>
        <nav className="space-y-3">
          <NavLink
            to="/navbar"
            className="block p-2 rounded hover:bg-gray-700"
            activeClassName="bg-blue-600"
          >
            Navbar
          </NavLink>
          <NavLink
            to="/hero"
            className="block p-2 rounded hover:bg-gray-700"
            activeClassName="bg-blue-600"
          >
            Hero Section
          </NavLink>
          <NavLink
            to="/testimonials"
            className="block p-2 rounded hover:bg-gray-700"
            activeClassName="bg-blue-600"
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/about"
            className="block p-2 rounded hover:bg-gray-700"
            activeClassName="bg-blue-600"
          >
            About Section
          </NavLink>
          <NavLink
            to="/contact"
            className="block p-2 rounded hover:bg-gray-700"
            activeClassName="bg-blue-600"
          >
            Contact Page
          </NavLink>
          <NavLink
            to="/login"
            className="block p-2 rounded hover:bg-gray-700"
            activeClassName="bg-blue-600"
          >
            Login Page
          </NavLink>
          <NavLink
            to="/register"
            className="block p-2 rounded hover:bg-gray-700"
            activeClassName="bg-blue-600"
          >
            Register Page
          </NavLink>
          <NavLink
            to="/footer"
            className="block p-2 rounded hover:bg-gray-700"
            activeClassName="bg-blue-600"
          >
            Footer
          </NavLink>
        </nav>
      </div>
      <div className="w-full md:w-3/4 p-8">
        <h1 className="text-3xl font-bold mb-6">Component Setup Guide</h1>
        <p className="text-lg leading-relaxed">
          Here you’ll find the basic setup instructions for each component.
          Click on any component from the left sidebar to view more details.
        </p>
      </div>
    </div>
  );
}

export default Start;
