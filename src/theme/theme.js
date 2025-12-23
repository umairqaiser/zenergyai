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
            padding: "12px 14px",
            "&::placeholder": {
              color: "#6b7280",
              opacity: 1,
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#6b7280",
            opacity: 1,
          },
          "&.modal-textfield .MuiOutlinedInput-root": {
            borderRadius: "9999px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          "&.import-client-button": {
            borderRadius: "8px",
            border: "1px solid #3B3538",
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            },
          },
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
            color: "#fff",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            color: "#9ca3af",
            borderColor: "#3B3538",
            "&:hover": {
              backgroundColor: "#3B3538",
            },
            "&.Mui-selected": {
              backgroundColor: "#fff",
              color: "#000",
              "&:hover": {
                backgroundColor: "#e5e5e5",
              },
            },
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#9ca3af",
          borderColor: "#3B3538",
          opacity: 1,
          "&.Mui-disabled": {
            opacity: 1,
          },
          "&:hover": {
            backgroundColor: "#3B3538",
          },
          "&.Mui-selected": {
            backgroundColor: "#fff",
            color: "#000",
            "&:hover": {
              backgroundColor: "#e5e5e5",
            },
          },
        },
        previousNext: {
          backgroundColor: "#3B3538",
          color: "#fff",
          opacity: 1,
          "&.Mui-disabled": {
            opacity: 1,
            backgroundColor: "#3B3538",
            color: "#fff",
          },
          "&:hover": {
            backgroundColor: "#4B4548",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#4F494C",
          borderRadius: "9999px",
          border: "1px solid #3B3538",
          color: "#fff",
          fontSize: "12px",
        },
        icon: {
          color: "#fff",
          marginLeft: "8px",
        },
        label: {
          paddingLeft: "4px",
          paddingRight: "12px",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#000000",
          borderRadius: "16px",
          backgroundImage: "none",
        },
        root: {
          "&.new-client-modal .MuiDialog-paper": {
            backgroundColor: "#000000",
            borderRadius: "16px",
            padding: "24px",
            backgroundImage: "none",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          "&.modal-content": {
            padding: 0,
            backgroundColor: "#000000ff",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.modal-close-button": {
            position: "absolute",
            right: 16,
            top: 16,
            color: "#9ca3af",
          },
        },
      },
    },
  },
});

export default theme;
