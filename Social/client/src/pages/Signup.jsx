import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="md:w-1/3 shadow-blue-600 md:mt-0 flex justify-center">
          <img
            src="/src/assets/landingpage_demo.png"
            alt="Vibbly app preview"
            className="w-80 md:w-[400px]"
          />
        </div>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold pb-10 text-indigo-600">Vibbly</h1>
        <h2 className="text-2xl font-bold text-center text-indigo-600">Sign Up</h2>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          />
          <input
            type="text"
            placeholder="userId"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-indigo-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
