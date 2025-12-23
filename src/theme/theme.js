import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#646cff",
    },
    background: {
      default: "#141112",
      paper: "#2A2426",
    },
    text: {
      primary: "#ffffff",
      secondary: "#9ca3af",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#2A2426",
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "#3B3538",
            },
            "&:hover fieldset": {
              borderColor: "#4B4548",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#646cff",
            },
          },
          "& .MuiInputBase-input": {
            color: "#fff",
            "&::placeholder": {
              color: "#9ca3af",
              opacity: 1,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
        contained: {
          backgroundColor: "#646cff",
          "&:hover": {
            backgroundColor: "#535bf2",
          },
        },
        outlined: {
          borderColor: "#3B3538",
          color: "#fff",
          backgroundColor: "#2A2426",
          "&:hover": {
            borderColor: "#4B4548",
            backgroundColor: "#3B3538",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "collapse",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #3B3538",
          borderLeft: "none",
          borderRight: "none",
          color: "#fff",
          padding: "12px 16px",
        },
        head: {
          fontWeight: 600,
          color: "#9ca3af",
          backgroundColor: "#3B3538",
          borderTop: "1px solid #3B3538",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#6B6568",
          "&.Mui-checked": {
            color: "#646cff",
          },
        },
      },
    },
  },
});

export default theme;
