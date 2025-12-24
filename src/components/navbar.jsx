import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Import, Plus, ChevronRight } from "lucide-react";
import NewClientModal from "./newclientmodal";
import ConnectFormModal from "./connectformmodal";

const Navbar = ({ onMenuClick, clientName }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const isMyClients = location.pathname === "/myclients";
  const isClientDetail = location.pathname.startsWith("/myclients/") && location.pathname !== "/myclients";
  const [modalOpen, setModalOpen] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  const renderBreadcrumb = () => {
    if (isClientDetail && clientName) {
      return (
        <div className="flex items-center gap-1 text-sm sm:text-base">
          <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
            Dashboard
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <Link to="/myclients" className="text-gray-400 hover:text-white transition-colors">
            My Clients
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-white font-semibold">{clientName}</span>
        </div>
      );
    }
    return null;
  };

  const getPageTitle = () => {
    if (isDashboard) return "Dashboard";
    if (isMyClients) return "My Clients";
    if (isClientDetail) return null;
    return "Page";
  };

  const pageTitle = getPageTitle();

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
          {isClientDetail ? (
            renderBreadcrumb()
          ) : (
            <h1
              className={`text-white font-[inter] text-[20px] font-semibold leading-[24px] ${
                isMyClients
                  ? "text-sm sm:text-base md:text-lg"
                  : "text-lg md:text-xl"
              }`}
            >
              {pageTitle}
            </h1>
          )}
        </div>
        {(isDashboard || isMyClients) && (
          <div className="flex items-center gap-2 sm:gap-3">
            {isMyClients && (
              <Button
                variant="contained"
                className="import-client-button"
                size="small"
                onClick={() => setConnectModalOpen(true)}
                sx={{
                  fontSize: { xs: "11px", sm: "13px" },
                  px: { xs: 1, sm: 2 },
                  py: { xs: 0.5, sm: 1 },
                  minWidth: "auto",
                }}
              >
                <Import size={14} className="mr-1 sm:mr-2" />
                Import Client
              </Button>
            )}
            <Button
              variant="contained"
              onClick={() => setModalOpen(true)}
              size={isMyClients ? "small" : "medium"}
              sx={{
                backgroundColor: "#fff",
                color: "#141112",
                borderRadius: "9999px",
                fontFamily: "Inter, sans-serif",
                fontSize: isMyClients ? { xs: "11px", sm: "13px" } : "14px",
                fontWeight: 600,
                lineHeight: "21px",
                letterSpacing: "0.07px",
                textTransform: "none",
                px: isMyClients ? { xs: 1.5, sm: 2 } : 2,
                py: isMyClients ? { xs: 0.5, sm: 1 } : 1.5,
                "&:hover": {
                  backgroundColor: "#e5e5e5",
                },
              }}
            >
              <Plus size={16} className="mr-1" />
              New Client
            </Button>
          </div>
        )}
      </header>
      <NewClientModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ConnectFormModal open={connectModalOpen} onClose={() => setConnectModalOpen(false)} />
    </>
  );
};

export default Navbar;
