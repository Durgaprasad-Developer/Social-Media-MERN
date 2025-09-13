import { Link } from "react-router";
import landingDemo from '../assets/landingpage_demo.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-indigo-600">Vibbly</h1>
        <div className="flex space-x-4">
          <Link to="/signin" className="px-4 py-2 bg-white border border-indigo-600 text-indigo-600 rounded-lg shadow hover:bg-indigo-50">
            Sign In
          </Link>
          <Link to='/signup' className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mt-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Connect, Share & Grow with <span className="text-indigo-600">Vibbly</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A new way to connect with friends, share your thoughts, and build communities that matter.
          </p>
          <div className="flex space-x-4">
            <Link to='/signup' className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
              Sign Up
            </Link>
            <Link to='/signin' className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300">
              Sign In
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={landingDemo}
            alt="Vibbly app preview"
            className="w-80 md:w-[400px]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-24 max-w-6xl w-full text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-12">Why Choose Vibbly?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-indigo-600 mb-2">Seamless Connections</h4>
            <p className="text-gray-600">Stay in touch with friends and communities effortlessly.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-indigo-600 mb-2">Creative Sharing</h4>
            <p className="text-gray-600">Express yourself through posts, stories, and discussions.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-indigo-600 mb-2">Community First</h4>
            <p className="text-gray-600">Build meaningful groups around topics you care about.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-8 text-center text-gray-500 border-t w-full">
        <p>© {new Date().getFullYear()} Vibbly. All rights reserved.</p>
      </footer>
    </div>
  );
}
