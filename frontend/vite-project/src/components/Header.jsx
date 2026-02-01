import { logoutUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const auth = useAuth();

  if (!auth) return null; // extra safety

  const { user, setUser } = auth;

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">MyApp</div>

      <nav className="nav">
        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
