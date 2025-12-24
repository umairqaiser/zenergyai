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
          "&.assessment-textfield .MuiOutlinedInput-root": {
            borderRadius: "9999px",
            backgroundColor: "#231F20",
            boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
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
          "&.signin-textfield .MuiOutlinedInput-root": {
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
          "&.assessment-back-button": {
            backgroundColor: "#3B3538",
            color: "#fff",
            borderRadius: "9999px",
            padding: "10px 24px",
            fontWeight: 600,
            fontSize: "14px",
            boxShadow:
              "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
            "&:hover": {
              backgroundColor: "#4B4548",
            },
          },
          "&.assessment-continue-button": {
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "9999px",
            padding: "10px 24px",
            fontWeight: 600,
            fontSize: "14px",
            "&:hover": {
              backgroundColor: "#e5e5e5",
            },
          },
          "&.navbar-new-client-button": {
            backgroundColor: "#fff",
            color: "#141112",
            borderRadius: "9999px",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "21px",
            letterSpacing: "0.07px",
            "&:hover": {
              backgroundColor: "#e5e5e5",
            },
          },
          "&.signin-button": {
            backgroundColor: "#fff",
            color: "#141112",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "21px",
            letterSpacing: "0.07px",
            borderRadius: "9999px",
            "&:hover": {
              backgroundColor: "#e5e5e5",
            },
          },
          "&.modal-cancel-button": {
            backgroundColor: "#3B3538",
            color: "#fff",
            borderRadius: "9999px",
            paddingLeft: "32px",
            paddingRight: "32px",
            "&:hover": {
              backgroundColor: "#4B4548",
            },
          },
          "&.modal-save-button": {
            backgroundColor: "#fff",
            color: "#141112",
            borderRadius: "9999px",
            paddingLeft: "32px",
            paddingRight: "32px",
            "&:hover": {
              backgroundColor: "#e5e5e5",
            },
            "&:disabled": {
              backgroundColor: "#6B6568",
              color: "#9ca3af",
            },
          },
          "&.view-detail-button": {
            color: "#E8E6E7",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "21px",
            letterSpacing: "0.07px",
          },
          "&.new-assessment-button": {
            backgroundColor: "#fff",
            color: "#141112",
            borderRadius: "9999px",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#e5e5e5",
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
    MuiStepper: {
      styleOverrides: {
        root: {
          "&.assessment-stepper": {
            backgroundColor: "transparent",
            gap: "32px",
          },
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: {
          padding: 0,
          flex: "none",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          "& .MuiStepLabel-iconContainer": {
            paddingRight: "8px",
          },
        },
        label: {
          color: "#9ca3af",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          textDecoration: "underline",
          "&.Mui-active": {
            color: "#fff",
            fontWeight: 600,
          },
          "&.Mui-completed": {
            color: "#9ca3af",
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "transparent",
          border: "1px solid #6B6568",
          borderRadius: "8px",
          width: "28px",
          height: "28px",
          "&.Mui-active": {
            color: "transparent",
            border: "1px solid #fff",
            "& .MuiStepIcon-text": {
              fill: "#fff",
            },
          },
          "&.Mui-completed": {
            color: "transparent",
            border: "1px solid #6B6568",
          },
        },
        text: {
          fill: "#6B6568",
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          "&.sidebar-menu": {
            backgroundColor: "#2A2426",
            border: "1px solid #3B3538",
            color: "#fff",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          "&.client-avatar": {
            width: 40,
            height: 40,
            backgroundColor: "#646cff",
          },
        },
      },
    },
  },
});

export default theme;
