import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful 🎉");
        navigate("/products");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:to-gray-800">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl animate-fade"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-pink-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300"
        >
          Login 🚀
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-500 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
