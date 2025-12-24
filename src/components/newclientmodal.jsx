import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useClient } from "../context/ClientContext";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[+]?[\d\s-]+$/, "Invalid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
});

const NewClientModal = ({ open, onClose }) => {
  const { updateClientData } = useClient();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Saving client:", values);
      updateClientData(values);
      onClose();
      formik.resetForm();
    },
  });

  const handleClose = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      className="new-client-modal"
    >
      <IconButton onClick={handleClose} className="modal-close-button">
        <CloseIcon />
      </IconButton>

      <DialogContent className="modal-content">
        <h2 className="text-white text-2xl font-bold mb-2">Create New Client</h2>
        <p className="text-gray-400 mb-6">Create a new client</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                First Name
              </label>
              <TextField
                fullWidth
                name="firstName"
                placeholder="Enter First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
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
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                variant="outlined"
                size="small"
                className="modal-textfield"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              variant="contained"
              onClick={handleClose}
              className="modal-cancel-button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="modal-save-button"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewClientModal;
