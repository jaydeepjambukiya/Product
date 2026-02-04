import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful 🎉");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:to-gray-800">
      
      <form className="w-full max-w-sm bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl animate-fade">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Create Account ✨
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300">
            Username
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-pink-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300"
        >
          Register 🚀
        </button>

        {/* Login link */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-500 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Signup;
