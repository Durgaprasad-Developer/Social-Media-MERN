import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../apiCalls/authCalls";
import landingDemo from '../assets/landingpage_demo.png';
import { setUserData } from "../redux/userSlice";


export default function Signup() {
  const [name, setname] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    try{
      e.preventDefault();
    const data = await signUp({name, userName, email, password});
   console.log("Server response:", data);
   
    if(data){
      navigate(setUserData(data))
    navigate('/home');
    }
    } catch (err) {
  console.error("Error during sign up:", err);
  console.error("Server response:", err.response?.data); // <- this shows actual backend message
}

    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="md:w-1/3 shadow-blue-600 md:mt-0 flex justify-center">
        <img
          src={landingDemo}
          alt="Vibbly app preview"
          className="w-80 md:w-[400px]"
        />
      </div>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold pb-10 text-indigo-600">Vibbly</h1>
        <h2 className="text-2xl font-bold text-center text-indigo-600">Sign Up</h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          />
          <input
            type="text"
            placeholder="User ID"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
