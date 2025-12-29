import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TextField,
  InputAdornment,
  Button,
  Chip,
  Pagination,
  PaginationItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Plus, FileText } from "lucide-react";
import { MOCK_ASSESSMENTS, PAGINATION, ASSESSMENT_STATUS } from "../constant/constant";

const AssesmentHistory = ({ clientName }) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { clientId } = useParams();
  const rowsPerPage = PAGINATION.ASSESSMENT_ROWS_PER_PAGE;

  const getChipClass = (status) => {
    switch (status) {
      case ASSESSMENT_STATUS.COMPLETED:
        return "assessment-chip-completed";
      case ASSESSMENT_STATUS.PROCESSING:
        return "assessment-chip-processing";
      case ASSESSMENT_STATUS.REJECTED:
        return "assessment-chip-rejected";
      default:
        return "assessment-chip-completed";
    }
  };

  const handleNewAssessment = () => {
    navigate(`/myclients/${clientId}/${encodeURIComponent(clientName)}/new-assessment`);
  };

  const paginatedAssessments = MOCK_ASSESSMENTS.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-white font-inter text-xl font-semibold leading-[24px]">
            Assessment History
          </h2>
          <Button
            variant="contained"
            startIcon={<Plus size={16} />}
            onClick={handleNewAssessment}
            className="new-assessment-button"
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              minWidth: "auto",
            }}
          >
            <span className="hidden sm:inline">New Assessment</span>
            <span className="sm:hidden">New</span>
          </Button>
        </div>
        <TextField
          placeholder="Search assessment..."
          size="small"
          sx={{ width: { xs: "100%", sm: "300px" } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#9ca3af" }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </div>
      <div className="flex flex-col items-start self-stretch p-4 gap-4 rounded-[9px] border border-neutral-700 bg-transparent shadow-sm">
        {paginatedAssessments.length > 0 ? (
          paginatedAssessments.map((assessment) => (
            <div
              key={assessment.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-4 rounded-lg bg-neutral-800 gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center">
                  <FileText size={20} className="text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-inter text-sm font-medium">
                    Assessment - {assessment.date}
                  </span>
                  <Chip
                    label={assessment.status}
                    size="small"
                    className={getChipClass(assessment.status)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<VisibilityOutlinedIcon sx={{ fontSize: 16 }} />}
                  className="assessment-button"
                >
                  View Report
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                  className="assessment-button"
                >
                  Open
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-12">
            <p className="text-gray-400 text-center">
              No assessments found for {clientName || "this client"}
            </p>
          </div>
        )}
        <div className="flex justify-end w-full mt-2">
          <Pagination
            count={Math.ceil(MOCK_ASSESSMENTS.length / rowsPerPage)}
            page={page}
            onChange={(_, value) => setPage(value)}
            shape="rounded"
            showFirstButton
            showLastButton
            siblingCount={1}
            boundaryCount={1}
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: () => (
                    <span
                      style={{
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Previous
                    </span>
                  ),
                  next: () => (
                    <span
                      style={{
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Next
                    </span>
                  ),
                }}
                {...item}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default AssesmentHistory;
