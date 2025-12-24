import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import arrowGray from "../assets/arrowgray.svg";

const ImportClientModal = ({ open, onClose }) => {
  const [selectedClients, setSelectedClients] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const clients = [
    {
      id: 1,
      firstName: "Jack",
      lastName: "Halow",
      email: "jack@example.com",
      phone: "+16467980373",
    },
  ];

  const handleSelectAll = (event) => {
    setSelectAll(event.target.checked);
    if (event.target.checked) {
      setSelectedClients(clients.map((client) => client.id));
    } else {
      setSelectedClients([]);
    }
  };

  const handleSelectClient = (clientId) => {
    const newSelected = selectedClients.includes(clientId)
      ? selectedClients.filter((id) => id !== clientId)
      : [...selectedClients, clientId];
    setSelectedClients(newSelected);
    setSelectAll(newSelected.length === clients.length);
  };

  const handleImport = () => {
    console.log("Importing clients:", selectedClients);
    onClose();
  };
  const MobileClientCard = ({ client }) => (
    <div className="bg-[#2A2426] rounded-lg p-4 mb-3 border border-[#3B3538]">
      <div className="flex items-start gap-3">
        <Checkbox
          checked={selectedClients.includes(client.id)}
          onChange={() => handleSelectClient(client.id)}
          sx={{ padding: 0, marginTop: "2px" }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-base mb-1">
            {client.firstName} {client.lastName}
          </p>
          <p className="text-gray-400 text-sm truncate mb-1">{client.email}</p>
          <p className="text-gray-400 text-sm">{client.phone}</p>
        </div>
      </div>
    </div>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
      className="import-client-modal"
      sx={{
        "& .MuiDialog-paper": {
          margin: isMobile ? 0 : isTablet ? "16px" : "32px",
          maxHeight: isMobile ? "100%" : "calc(100% - 64px)",
          borderRadius: isMobile ? 0 : "16px",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        className="modal-close-button"
        sx={{
          position: "absolute",
          right: isMobile ? 8 : 16,
          top: isMobile ? 8 : 16,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        className="import-client-content"
        sx={{
          padding: isMobile ? "16px" : "24px",
          paddingTop: isMobile ? "48px" : "24px",
        }}
      >
        <div className="mb-4 md:mb-6">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
            Import Client
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6">
            Select users to create clients
          </p>
        </div>
        {isMobile ? (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#3B3538]">
              <Checkbox
                checked={selectAll}
                onChange={handleSelectAll}
                indeterminate={
                  selectedClients.length > 0 &&
                  selectedClients.length < clients.length
                }
                sx={{ padding: 0 }}
              />
              <span className="text-gray-400 text-sm">Select All</span>
            </div>
            {clients.map((client) => (
              <MobileClientCard key={client.id} client={client} />
            ))}
          </div>
        ) : (
          <TableContainer
            className="import-table-container"
            sx={{ overflowX: "auto" }}
          >
            <Table sx={{ minWidth: isTablet ? 500 : 650 }}>
              <TableHead>
                <TableRow className="import-table-header">
                  <TableCell padding="checkbox" className="import-table-cell">
                    <Checkbox
                      checked={selectAll}
                      onChange={handleSelectAll}
                      indeterminate={
                        selectedClients.length > 0 &&
                        selectedClients.length < clients.length
                      }
                    />
                  </TableCell>
                  <TableCell className="import-table-cell">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      First Name
                      <img src={arrowGray} alt="sort" className="w-4 h-4" />
                    </div>
                  </TableCell>
                  <TableCell className="import-table-cell">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      Last Name
                      <img src={arrowGray} alt="sort" className="w-4 h-4" />
                    </div>
                  </TableCell>
                  <TableCell className="import-table-cell">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      Email Address
                      <img src={arrowGray} alt="sort" className="w-4 h-4" />
                    </div>
                  </TableCell>
                  <TableCell className="import-table-cell">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      Phone Number
                      <img src={arrowGray} alt="sort" className="w-4 h-4" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedClients.includes(client.id)}
                        onChange={() => handleSelectClient(client.id)}
                      />
                    </TableCell>
                    <TableCell>{client.firstName}</TableCell>
                    <TableCell>{client.lastName}</TableCell>
                    <TableCell sx={{ maxWidth: 200 }}>
                      <span className="truncate block">{client.email}</span>
                    </TableCell>
                    <TableCell>{client.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-4 md:mt-6">
          <Button
            variant="contained"
            onClick={onClose}
            fullWidth={isMobile}
            className="modal-cancel-button"
            sx={{ py: isMobile ? 1.5 : 1 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleImport}
            disabled={selectedClients.length === 0}
            fullWidth={isMobile}
            className="modal-save-button"
            sx={{ py: isMobile ? 1.5 : 1 }}
          >
            Import ({selectedClients.length})
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImportClientModal;
