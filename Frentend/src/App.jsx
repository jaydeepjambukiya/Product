import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Signup from "./auth/Register/Signup";
import Login from "./auth/Login/Login";
import Product from "./Pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ChangePassword from './Pages/ChangePassword';

// 1. Define Layout locally (since it is not in your file tree)
// Use <Outlet /> to render the child route (like Product) inside the layout
const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Outlet /> 
      </div>
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    // Public Routes (No Header/Footer)
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    // Protected/Main Routes (With Header/Footer)
    {
      element: <Layout />, // This wraps the children below
      children: [
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/change-password",
          element: <ChangePassword />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;