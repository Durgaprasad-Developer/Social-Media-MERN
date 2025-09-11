import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold pb-10 text-indigo-600">Vibbly</h1>
        <h2 className="text-2xl font-bold text-center text-indigo-600">Sign In</h2>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="username "
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
            Sign In
          </button>
        </form>

        <div className="mt-4 flex justify-between text-sm">
          <Link to="/forgot-password" className="text-indigo-600 hover:underline">
            Forgot password?
          </Link>
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
