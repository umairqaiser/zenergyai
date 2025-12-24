import { useState } from "react";
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

const SearchClient = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const columns = [
    "Client Name",
    "Phone Number",
    "Assessments",
    "Last Activity",
    "Actions",
  ];

  const clients = [
    {
      id: 1,
      name: "Jack Harlow",
      email: "jack@gmail.com",
      phone: "+1 234 567 890",
      assessments: 1,
      lastActivity: "2025-10-20",
      avatar: "",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 987 654 321",
      assessments: 3,
      lastActivity: "2025-11-15",
      avatar: "",
    },
  ];

  return (
    <div className="flex flex-col items-start self-stretch p-4 gap-4 rounded-[9px] border border-[#3B3538] bg-transparent shadow-sm mt-4">
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
              {columns.map((column) => (
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
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar sx={{ width: 40, height: 40, bgcolor: "#646cff" }}>
                      {client.name.charAt(0)}
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-white font-[inter] text-sm font-semibold leading-[21px] tracking-[0.07px]">{client.name}</span>
                      <span className="text-white font-[inter] text-sm font-normal leading-[21px] tracking-[0.07px]">{client.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-white font-[inter] text-sm font-normal leading-[21px] tracking-[0.07px]">
                    {client.phone}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-white font-[inter] text-sm font-normal leading-[21px] tracking-[0.07px]">
                    {client.assessments} Assessment
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-white font-[inter] text-sm font-normal leading-[21px] tracking-[0.07px]">
                    {client.lastActivity}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<VisibilityIcon />}
                    sx={{
                      color: "#E8E6E7",
                      textAlign: "center",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "21px",
                      letterSpacing: "0.07px",
                    }}
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
          Showing {(page - 1) * rowsPerPage + 1}-{Math.min(page * rowsPerPage, clients.length)} of {clients.length} clients
        </span>
        <Pagination
          count={Math.ceil(clients.length / rowsPerPage)}
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

export default SearchClient;
