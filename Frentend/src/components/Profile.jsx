import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 dark:text-gray-300">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        User not logged in!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              {user.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Account Info */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Account Information
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <span className="font-semibold">Name:</span> {user.name}
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </div>

          {/* Security */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Security
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Password: ********
            </p>

            <button
              onClick={() => navigate("/change-password")}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
