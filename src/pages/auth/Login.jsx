import { FaDumbbell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/pos");
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        {/* Logo and title */}
        <div className="flex flex-col items-center mb-8">
          <FaDumbbell className="w-16 h-16 text-indigo-600 mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-800">Gym POS</h1>
          <p className="text-gray-500 mt-1 text-center">
            Manage your gym efficiently and effortlessly
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 placeholder-transparent"
              placeholder="Email"
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-indigo-500 peer-focus:text-sm">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 placeholder-transparent"
              placeholder="Password"
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-indigo-500 peer-focus:text-sm">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          &copy; 2024 Gym POS. All rights reserved.
        </p>
      </div>
    </div>
  );
}
