import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/products" className="text-2xl font-bold text-indigo-600">
          Felix<span className="text-pink-500">Shop</span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <Link
            to="/products"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-500"
          >
            Products
          </Link>

          <Link
            to="/profile"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-500"
          >
            Profile
          </Link>

          <LogoutButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
