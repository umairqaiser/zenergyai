import { useState } from "react";
import { Dialog, DialogContent, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link2 } from "lucide-react";
import ImportClientModal from "./importclientmodal";

const ConnectFormModal = ({ open, onClose }) => {
  const [importModalOpen, setImportModalOpen] = useState(false);

  const handleConnect = () => {
    console.log("Connecting form...");
    onClose();
    setImportModalOpen(true);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        className="connect-form-modal"
      >
        <IconButton onClick={onClose} className="modal-close-button">
          <CloseIcon />
        </IconButton>

        <DialogContent className="connect-form-content">
          <div className="flex flex-col items-center justify-center text-center py-8">
            <div className="w-12 h-12 rounded-lg bg-[#3B3538] flex items-center justify-center mb-6">
              <Link2 size={24} className="text-white" />
            </div>
            <h2 className="text-white font-[inter] text-[20px] font-semibold leading-[24px] mb-3">Connect Forms</h2>
            <p className="text-white font-[inter] text-base font-normal leading-[24px] mb-6">
              Link your form to fetch clients data directly.
            </p>
            <Button className="connect-form-button" onClick={handleConnect}>Connect</Button>
          </div>
        </DialogContent>
      </Dialog>
      <ImportClientModal
        open={importModalOpen}
        onClose={() => setImportModalOpen(false)}
      />
    </>
  );
};

export default ConnectFormModal;
