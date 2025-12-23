const Navbar = ({ onMenuClick }) => {
  return (
    <header className="h-16 bg-[#2A2426] shadow-sm flex items-center px-4 md:px-6">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-white p-2 mr-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <h1 className="text-lg md:text-xl font-semibold text-[#FFF]">Dashboard</h1>
    </header>
  );
};

export default Navbar;
