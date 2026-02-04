import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/user/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        alert("Logged out 👋");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-5 py-2 rounded-lg font-semibold text-white 
                 bg-gradient-to-r from-red-500 to-pink-500
                 hover:scale-105 transition-transform duration-300
                 shadow-md"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
