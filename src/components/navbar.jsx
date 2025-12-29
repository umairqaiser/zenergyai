import { useState, useRef, useEffect } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Import, Plus, ChevronRight } from "lucide-react";
import NewClientModal from "./newclientmodal";
import ConnectFormModal from "./connectformmodal";
import EditIcon from "../assets/edit.svg";

const Navbar = ({ onMenuClick, clientName, isNewAssessment }) => {
  const location = useLocation();
  const { clientId } = useParams();
  const isDashboard = location.pathname === "/dashboard";
  const isMyClients = location.pathname === "/myclients";
  const isClientDetail =
    location.pathname.startsWith("/myclients/") &&
    location.pathname !== "/myclients" &&
    !isNewAssessment;
  const [modalOpen, setModalOpen] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [assessmentName, setAssessmentName] = useState("New Assessment");
  const [isEditingAssessment, setIsEditingAssessment] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditingAssessment && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditingAssessment]);

  const handleAssessmentNameChange = (e) => {
    setAssessmentName(e.target.value);
  };

  const handleAssessmentKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditingAssessment(false);
    }
    if (e.key === "Escape") {
      setIsEditingAssessment(false);
    }
  };

  const handleAssessmentBlur = () => {
    setIsEditingAssessment(false);
  };

  const renderBreadcrumb = () => {
    if (isNewAssessment && clientName) {
      return (
        <div className="flex items-center gap-1 text-xs sm:text-sm md:text-base flex-wrap">
          <Link
            to="/dashboard"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <Link
            to="/myclients"
            className="text-gray-400 hover:text-white transition-colors"
          >
            My Clients
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <Link
            to={`/myclients/${clientId}/${encodeURIComponent(clientName)}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {clientName}
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <div className="flex items-center gap-2">
            {isEditingAssessment ? (
              <input
                ref={inputRef}
                type="text"
                value={assessmentName}
                onChange={handleAssessmentNameChange}
                onKeyDown={handleAssessmentKeyDown}
                onBlur={handleAssessmentBlur}
                className="bg-transparent text-white font-semibold border-b border-white outline-none px-1"
                style={{ minWidth: "120px", width: `${assessmentName.length + 1}ch` }}
              />
            ) : (
              <>
                <span className="text-white font-semibold">{assessmentName}</span>
                <button
                  onClick={() => setIsEditingAssessment(true)}
                  className="p-1 hover:bg-gray-700 rounded transition-colors"
                >
                  <img src={EditIcon} alt="Edit" className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      );
    }
    if (isClientDetail && clientName) {
      return (
        <div className="flex items-center gap-1 text-sm sm:text-base">
          <Link
            to="/dashboard"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <Link
            to="/myclients"
            className="text-gray-400 hover:text-white transition-colors"
          >
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
    if (isClientDetail || isNewAssessment) return null;
    return "Page";
  };

  const pageTitle = getPageTitle();

  return (
    <>
      <header className="h-16 bg-neutral-800 shadow-sm flex items-center justify-between px-4 md:px-6">
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
          {isClientDetail || isNewAssessment ? (
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
              className="navbar-new-client-button"
              sx={{
                fontSize: isMyClients ? { xs: "11px", sm: "13px" } : "14px",
                px: isMyClients ? { xs: 1.5, sm: 2 } : 2,
                py: isMyClients ? { xs: 0.5, sm: 1 } : 1.5,
              }}
            >
              <Plus size={16} className="mr-1" />
              New Client
            </Button>
          </div>
        )}
      </header>
      <NewClientModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ConnectFormModal
        open={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
