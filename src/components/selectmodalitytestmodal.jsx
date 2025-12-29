import {
  Dialog,
  DialogContent,
  Button,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { MODALITY_TESTS } from "../constant/constant";

const SelectModalityTestModal = ({ open, onClose, onConfirm }) => {
  const [selectedTests, setSelectedTests] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTests(typeof value === "string" ? value.split(",") : value);
  };

  const handleClose = () => {
    setSelectedTests([]);
    onClose();
  };

  const handleConfirm = () => {
    onConfirm?.(selectedTests);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      className="select-modality-modal"
    >
      <IconButton onClick={handleClose} className="modal-close-button">
        <CloseIcon />
      </IconButton>

      <DialogContent className="modality-modal-content">
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Select Modality Tests
          </h2>

          <FormControl className="modality-select-form" sx={{ width: "70%", mb: 4 }}>
            <Select
              multiple
              value={selectedTests}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) =>
                selected.length === 0 ? "Select" : selected.join(", ")
              }
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
              className="modality-select"
              MenuProps={{
                PaperProps: {
                  className: "modality-select-menu",
                },
              }}
            >
              {MODALITY_TESTS.map((test) => (
                <MenuItem key={test} value={test} className="modality-menu-item">
                  <Checkbox checked={selectedTests.indexOf(test) > -1} />
                  <ListItemText primary={test} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleConfirm}
            className="modality-continue-button"
            disabled={selectedTests.length === 0}
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SelectModalityTestModal;
