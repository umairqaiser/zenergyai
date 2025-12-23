import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { Import } from "lucide-react";
import NewClientModal from "./newclientmodal";

const Navbar = ({ onMenuClick }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const isMyClients = location.pathname === "/myclients";
  const [modalOpen, setModalOpen] = useState(false);

  const getPageTitle = () => {
    if (isDashboard) return "Dashboard";
    if (isMyClients) return "My Clients";
    return "Page";
  };

  return (
    <>
      <header className="h-16 bg-[#2A2426] shadow-sm flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
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
          <h1 className="text-lg md:text-xl font-semibold text-[#FFF]">
            {getPageTitle()}
          </h1>
        </div>
        {(isDashboard || isMyClients) && (
          <div className="flex items-center gap-3">
            {isMyClients && (
              <Button
                variant="contained"
                className="import-client-button"
              >
                <Import size={18} className="mr-2" />
                Import Client
              </Button>
            )}
            <Button
              variant="contained"
              onClick={() => setModalOpen(true)}
              sx={{
                backgroundColor: "#fff",
                color: "#141112",
                borderRadius: "9999px",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "21px",
                letterSpacing: "0.07px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#e5e5e5",
                },
              }}
            >
              + New Client
            </Button>
          </div>
        )}
      </header>
      <NewClientModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
