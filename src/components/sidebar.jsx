import { NavLink } from "react-router-dom";
import zenergyLogo from "../assets/zenergylogo.png";

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Clients", path: "/my-clients" },
    { name: "New Assessment", path: "/new-assessment" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 min-h-screen bg-[#2A2426] text-white flex flex-col border-r border-[#3B3538] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <img src={zenergyLogo} alt="Zenergy Logo" className="w-32" />
          <button
            onClick={onClose}
            className="lg:hidden text-white p-2"
          >
            ✕
          </button>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center h-10 px-3 py-1 gap-2 self-stretch rounded-md transition ${
                      isActive
                        ? "bg-[#3B3538] text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
