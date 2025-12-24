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
          "&.connect-form-button": {
            backgroundColor: "#fff",
            color: "#141112",
            borderRadius: "8px",
            paddingLeft: "32px",
            paddingRight: "32px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#e5e5e5",
            },
          },
          "&.assessment-button": {
            display: "flex",
            minHeight: "32px",
            padding: "5.5px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
            borderRadius: "8px",
            backgroundColor: "#3B3538",
            border: "none",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#4B4548",
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
          "&.import-table-container": {
            backgroundColor: "transparent",
            borderRadius: "8px",
            overflow: "hidden",
          },
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
          "&.import-table-cell": {
            backgroundColor: "#3B3538",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "21px",
            letterSpacing: "0.07px",
            color: "#fff",
          },
        },
        head: {
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "21px",
          letterSpacing: "0.07px",
          color: "#fff",
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
          "&.import-table-header": {
            backgroundColor: "#3B3538",
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
          gap: "4px",
          "&.assessment-chip-completed": {
            backgroundColor: "#22c55e",
            border: "none",
            color: "#fff",
            fontSize: "11px",
            fontWeight: 500,
            height: "20px",
            width: "42%",
            "& .MuiChip-label": {
              paddingLeft: "8px",
              paddingRight: "8px",
            },
          },
          "&.assessment-chip-processing": {
            backgroundColor: "#f59e0b",
            border: "none",
            color: "#fff",
            fontSize: "11px",
            fontWeight: 500,
            height: "20px",
            width: "42%",
            "& .MuiChip-label": {
              paddingLeft: "8px",
              paddingRight: "8px",
            },
          },
          "&.assessment-chip-rejected": {
            backgroundColor: "#ef4444",
            border: "none",
            color: "#fff",
            fontSize: "11px",
            fontWeight: 500,
            height: "20px",
            width: "42%",
            "& .MuiChip-label": {
              paddingLeft: "8px",
              paddingRight: "8px",
            },
          },
        },
        icon: {
          color: "#fff",
          marginLeft: "8px",
          marginRight: "0px",
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
          "&.connect-form-modal .MuiDialog-paper": {
            backgroundColor: "#000000",
            borderRadius: "16px",
            padding: "24px",
            backgroundImage: "none",
          },
          "&.import-client-modal .MuiDialog-paper": {
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
          "&.connect-form-content": {
            padding: 0,
            backgroundColor: "#000000",
          },
          "&.import-client-content": {
            padding: 0,
            backgroundColor: "#000000",
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
