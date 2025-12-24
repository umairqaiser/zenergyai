import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { Menu } from "lucide-react";
import ConnectFormModal from "./connectformmodal";

const steps = [
  "Intake Form",
  "Manual Data Input",
  "Upload Data Files",
  "Review",
];

const NewAssesment = () => {
  const [activeStep] = useState(0);
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 min-h-full">
      <div className="flex items-center self-stretch p-3 rounded-[9px] bg-[#2A2426]">
        <div className="flex items-center w-full">
          {steps.map((label, index) => (
            <Box
              key={label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                backgroundColor: index === activeStep ? "#3B3538" : "transparent",
                marginRight: index < steps.length - 1 ? "24px" : 0,
              }}
            >
              <Box
                sx={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  border: index === activeStep ? "1px solid #fff" : "1px solid #6B6568",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: index === activeStep ? "#fff" : "#6B6568",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {index + 1}
              </Box>
              <span
                style={{
                  color: index === activeStep ? "#fff" : "#9ca3af",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: index === activeStep ? 600 : 500,
                  textDecoration: "underline",
                }}
              >
                {label}
              </span>
            </Box>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between self-stretch p-4 rounded-[9px] bg-[#2A2426]">
        <div className="flex items-center gap-3">
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #3B3538",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
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
            <span className="text-white font-medium text-sm">Connect Intake Form</span>
            <span className="text-gray-400 text-xs">Connect your intake form to fetch data</span>
          </div>
        </div>
        <button
          className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
          onClick={() => setConnectModalOpen(true)}
        >
          Connect
        </button>
      </div>
      <div className="flex flex-col self-stretch rounded-[9px] bg-[#2A2426]">
        <div className="flex items-center gap-2 p-4 border-b border-[#3B3538]">
          <Menu size={20} className="text-white" />
          <span className="text-white font-medium text-base">Personal Details</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">First Name</label>
              <TextField
                placeholder="Enter First Name"
                variant="outlined"
                fullWidth
                className="assessment-textfield"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Last Name</label>
              <TextField
                placeholder="Enter Last Name"
                variant="outlined"
                fullWidth
                className="assessment-textfield"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Email Address</label>
              <TextField
                placeholder="Enter Email Address"
                variant="outlined"
                fullWidth
                className="assessment-textfield"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Phone Number</label>
              <TextField
                placeholder="Enter Phone Number"
                variant="outlined"
                fullWidth
                className="assessment-textfield"
              />
            </div>
          </div>
        </div>
      </div>

      <ConnectFormModal
        open={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />
      <div className="flex-grow"></div>
      <div className="flex items-center justify-between self-stretch mt-auto pt-4">
        <Button variant="contained" className="assessment-back-button">
          Back
        </Button>
        <Button variant="contained" className="assessment-continue-button">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default NewAssesment;
