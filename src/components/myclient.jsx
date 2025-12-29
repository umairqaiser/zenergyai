import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  InputAdornment,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Avatar,
  Pagination,
  PaginationItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import arrowGray from "../assets/arrowgray.svg";
import { CLIENT_TABLE_COLUMNS, MOCK_CLIENTS, PAGINATION } from "../constant/constant";

const MyClient = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const rowsPerPage = PAGINATION.ROWS_PER_PAGE;

  return (
    <div className="flex flex-col items-start self-stretch p-4 gap-4 rounded-[9px] border border-neutral-700 bg-transparent shadow-sm mt-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
        <TextField
          placeholder="Search client..."
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
        <Button variant="outlined" size="medium">
          Download CSV
        </Button>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              {CLIENT_TABLE_COLUMNS.map((column) => (
                <TableCell key={column}>
                  <div className="flex items-center gap-2">
                    {column}
                    <img src={arrowGray} alt="sort" className="w-4 h-4" />
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {MOCK_CLIENTS.map((client) => (
              <TableRow key={client.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="client-avatar">
                      {client.name.charAt(0)}
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-white">{client.name}</span>
                      <span className="text-gray-400 text-sm">{client.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-white font-inter text-sm font-normal leading-[21px] tracking-[0.07px]">
                    {client.phone}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-white font-inter text-sm font-normal leading-[21px] tracking-[0.07px]">
                    {client.assessments} Assessment
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-white font-inter text-sm font-normal leading-[21px] tracking-[0.07px]">
                    {client.lastActivity}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<VisibilityIcon />}
                    onClick={() => navigate(`/myclients/${client.id}/${encodeURIComponent(client.name)}`)}
                    className="view-detail-button"
                  >
                    View Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4">
        <span className="text-gray-400 text-sm">
          Showing {(page - 1) * rowsPerPage + 1}-{Math.min(page * rowsPerPage, MOCK_CLIENTS.length)} of {MOCK_CLIENTS.length} clients
        </span>
        <Pagination
          count={Math.ceil(MOCK_CLIENTS.length / rowsPerPage)}
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
                  <span style={{ color: "#fff", display: "flex", alignItems: "center", gap: "4px" }}>
                    Previous
                  </span>
                ),
                next: () => (
                  <span style={{ color: "#fff", display: "flex", alignItems: "center", gap: "4px" }}>
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
  );
};

export default MyClient;
