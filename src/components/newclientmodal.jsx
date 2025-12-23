import { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const NewClientModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving client:", formData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      className="new-client-modal"
    >
      <IconButton onClick={onClose} className="modal-close-button">
        <CloseIcon />
      </IconButton>

      <DialogContent className="modal-content">
        <h2 className="text-white text-2xl font-bold mb-2">Create New Client</h2>
        <p className="text-gray-400 mb-6">Create a new client</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              First Name
            </label>
            <TextField
              fullWidth
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              size="small"
              className="modal-textfield"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Last Name
            </label>
            <TextField
              fullWidth
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              size="small"
              className="modal-textfield"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email Address
            </label>
            <TextField
              fullWidth
              name="email"
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              size="small"
              className="modal-textfield"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Phone Number
            </label>
            <TextField
              fullWidth
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              size="small"
              className="modal-textfield"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: "#3B3538",
              color: "#fff",
              borderRadius: "9999px",
              px: 4,
              "&:hover": {
                backgroundColor: "#4B4548",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor: "#fff",
              color: "#141112",
              borderRadius: "9999px",
              px: 4,
              "&:hover": {
                backgroundColor: "#e5e5e5",
              },
            }}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewClientModal;
