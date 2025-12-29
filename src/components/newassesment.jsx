import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { Menu } from "lucide-react";
import ConnectFormModal from "./connectformmodal";
import ManualDataInput from "./manualdatainput";
import SelectModalityTestModal from "./selectmodalitytestmodal";
import { useClient } from "../context/ClientContext";
import { ASSESSMENT_STEPS } from "../constant/constant";

const NewAssesment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [modalityModalOpen, setModalityModalOpen] = useState(false);
  const [selectedModalities, setSelectedModalities] = useState([]);
  const { clientData, updateClientData } = useClient();

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setPersonalDetails({
      firstName: clientData.firstName || "",
      lastName: clientData.lastName || "",
      email: clientData.email || "",
      phone: clientData.phone || "",
    });
  }, [clientData]);

  const handlePersonalDetailsChange = (field) => (event) => {
    const newDetails = { ...personalDetails, [field]: event.target.value };
    setPersonalDetails(newDetails);
    updateClientData(newDetails);
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleContinue = () => {
    if (activeStep < ASSESSMENT_STEPS.length - 1) {
      setModalityModalOpen(true);
    }
  };

  const handleModalityConfirm = (tests) => {
    setSelectedModalities(tests);
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="flex flex-col gap-4 min-h-full">
      <div className="flex items-center self-stretch p-2 sm:p-3 rounded-[9px] bg-neutral-800 overflow-x-auto scrollbar-thin">
        <div className="flex items-center w-full min-w-max gap-1 sm:gap-0">
          {ASSESSMENT_STEPS.map((label, index) => (
            <Box
              key={label}
              onClick={() => handleStepClick(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "4px", sm: "8px" },
                padding: { xs: "6px 10px", sm: "8px 16px" },
                borderRadius: "8px",
                backgroundColor: index === activeStep ? "#3B3538" : "transparent",
                marginRight: { xs: "4px", sm: index < ASSESSMENT_STEPS.length - 1 ? "24px" : 0 },
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: { xs: "20px", sm: "28px" },
                  height: { xs: "20px", sm: "28px" },
                  borderRadius: { xs: "6px", sm: "8px" },
                  border: index === activeStep ? "1px solid #fff" : "1px solid #6B6568",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: index === activeStep ? "#fff" : "#6B6568",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "9px", sm: "12px" },
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </Box>
              <span
                style={{
                  color: index === activeStep ? "#fff" : "#9ca3af",
                  fontFamily: "Inter, sans-serif",
                  fontSize: window.innerWidth < 640 ? "11px" : "14px",
                  fontWeight: index === activeStep ? 600 : 500,
                  textDecoration: "underline",
                  whiteSpace: "nowrap",
                }}
                className="text-[11px] sm:text-sm"
              >
                {label}
              </span>
            </Box>
          ))}
        </div>
      </div>
      {activeStep === 0 && (
        <>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between self-stretch p-3 sm:p-4 rounded-[9px] bg-neutral-800 gap-3 sm:gap-0">
            <div className="flex items-center gap-3">
              <Box
                sx={{
                  width: { xs: "36px", sm: "40px" },
                  height: { xs: "36px", sm: "40px" },
                  borderRadius: "8px",
                  border: "1px solid #3B3538",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </Box>
              <div className="flex flex-col">
                <span className="text-white font-medium text-xs sm:text-sm">Connect Intake Form</span>
                <span className="text-neutral-400 text-[10px] sm:text-xs">Connect your intake form to fetch data</span>
              </div>
            </div>
            <button
              className="px-3 sm:px-4 py-2 rounded-lg bg-white text-black text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
              onClick={() => setConnectModalOpen(true)}
            >
              Connect
            </button>
          </div>
          <div className="flex flex-col self-stretch rounded-[9px] bg-neutral-800">
            <div className="flex items-center gap-2 p-3 sm:p-4 border-b border-neutral-700">
              <Menu size={18} className="text-white sm:w-5 sm:h-5" />
              <span className="text-white font-medium text-sm sm:text-base">Personal Details</span>
            </div>
            <div className="p-3 sm:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-white text-xs sm:text-sm font-medium">First Name</label>
                  <TextField
                    placeholder="Enter First Name"
                    variant="outlined"
                    fullWidth
                    className="assessment-textfield"
                    value={personalDetails.firstName}
                    onChange={handlePersonalDetailsChange("firstName")}
                    size="small"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-xs sm:text-sm font-medium">Last Name</label>
                  <TextField
                    placeholder="Enter Last Name"
                    variant="outlined"
                    fullWidth
                    className="assessment-textfield"
                    value={personalDetails.lastName}
                    onChange={handlePersonalDetailsChange("lastName")}
                    size="small"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-xs sm:text-sm font-medium">Email Address</label>
                  <TextField
                    placeholder="Enter Email Address"
                    variant="outlined"
                    fullWidth
                    className="assessment-textfield"
                    value={personalDetails.email}
                    onChange={handlePersonalDetailsChange("email")}
                    size="small"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-xs sm:text-sm font-medium">Phone Number</label>
                  <TextField
                    placeholder="Enter Phone Number"
                    variant="outlined"
                    fullWidth
                    className="assessment-textfield"
                    value={personalDetails.phone}
                    onChange={handlePersonalDetailsChange("phone")}
                    size="small"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeStep === 1 && <ManualDataInput selectedModalities={selectedModalities} />}

      {activeStep === 2 && (
        <div className="flex flex-col self-stretch rounded-[9px] bg-neutral-800 p-8">
          <p className="text-neutral-400 text-center">Upload Data Files - Coming Soon</p>
        </div>
      )}

      {activeStep === 3 && (
        <div className="flex flex-col self-stretch rounded-[9px] bg-neutral-800 p-8">
          <p className="text-neutral-400 text-center">Review - Coming Soon</p>
        </div>
      )}

      <ConnectFormModal
        open={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />
      <SelectModalityTestModal
        open={modalityModalOpen}
        onClose={() => setModalityModalOpen(false)}
        onConfirm={handleModalityConfirm}
      />
      <div className="flex-grow"></div>
      <div className="flex items-center justify-between self-stretch mt-auto pt-4">
        <Button
          variant="contained"
          className="assessment-back-button"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </Button>
        <Button
          variant="contained"
          className="assessment-continue-button"
          onClick={handleContinue}
          disabled={activeStep === ASSESSMENT_STEPS.length - 1}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default NewAssesment;
