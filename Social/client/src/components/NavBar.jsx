import React from "react";
import logo2 from "../assets/logo2.png";

function Navbar() {
  return (
    <div className="w-full bg-black border-b border-gray-800 px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo2} alt="logo" className="w-8 h-8 rounded-md" />
        <h1 className="text-white text-lg font-bold">Vibbly</h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-white font-medium">
        <a href="/home" className="hover:text-indigo-400">Home</a>
        <a href="/explore" className="hover:text-indigo-400">Explore</a>
        <a href="/profile" className="hover:text-indigo-400">Profile</a>
      </div>

      {/* Sign Out Placeholder */}
      <button className="hidden md:block bg-indigo-600 px-4 py-1.5 rounded-lg text-white font-semibold hover:bg-indigo-500">
        Sign Out
      </button>
    </div>
  );
}

export default Navbar;
