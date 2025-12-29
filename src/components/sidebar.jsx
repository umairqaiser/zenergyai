import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import zenergyLogo from "../assets/zenergylogo.png";
import userAvatar from "../assets/user.svg";
import dashboardIcon from "../assets/dashboardicon.svg";
import clientIcon from "../assets/clienticon.svg";
import assessmentIcon from "../assets/assesmenticon.svg";
import settingIcon from "../assets/settingicon.svg";
import helpIcon from "../assets/helpicon.svg";
import {
  SIDEBAR_MENU_ITEMS,
  SIDEBAR_BOTTOM_MENU_ITEMS,
  USER_MENU_OPTIONS,
} from "../constant/constant";

const iconMap = {
  dashboardIcon,
  clientIcon,
  assessmentIcon,
  settingIcon,
  helpIcon,
};

const Sidebar = ({ isOpen, onClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 min-h-screen bg-neutral-800 text-white flex flex-col border-r border-neutral-700 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <img src={zenergyLogo} alt="Zenergy Logo" className="w-32" />
          <button onClick={onClose} className="lg:hidden text-white p-2">
            ✕
          </button>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {SIDEBAR_MENU_ITEMS.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center h-10 px-3 py-1 gap-2 self-stretch rounded-md transition overflow-hidden text-ellipsis whitespace-nowrap font-inter text-sm font-normal leading-[21px] tracking-[0.07px] ${
                      isActive
                        ? "bg-neutral-700 text-white"
                        : "text-neutral-100 hover:bg-gray-800"
                    }`
                  }
                >
                  <img src={iconMap[item.icon]} alt={item.name} className="w-5 h-5" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-4 pb-4 border-neutral-700 pt-4">
          <ul className="space-y-2 mb-4">
            {SIDEBAR_BOTTOM_MENU_ITEMS.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center h-10 px-3 py-1 gap-2 self-stretch rounded-md transition overflow-hidden text-ellipsis whitespace-nowrap font-inter text-sm font-normal leading-[21px] tracking-[0.07px] ${
                      isActive
                        ? "bg-neutral-700 text-white"
                        : "text-neutral-100 hover:bg-gray-800"
                    }`
                  }
                >
                  <img src={iconMap[item.icon]} alt={item.name} className="w-5 h-5" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between p-2 rounded-md">
            <div className="flex items-center gap-3">
              <img
                src={userAvatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white text-sm font-medium">John Doe</p>
                <p className="text-gray-400 text-xs">Trainer</p>
              </div>
            </div>
            <IconButton
              onClick={handleMenuClick}
              size="small"
              sx={{ color: "#9ca3af" }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              slotProps={{
                paper: {
                  className: "sidebar-menu",
                },
              }}
            >
              {USER_MENU_OPTIONS.map((option) => (
                <MenuItem key={option} onClick={handleMenuClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
