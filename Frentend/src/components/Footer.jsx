const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} FelixShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
