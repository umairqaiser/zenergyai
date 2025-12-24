import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import router from "./router/router";
import theme from "./theme/theme";
import { ClientProvider } from "./context/ClientContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ClientProvider>
        <RouterProvider router={router} />
      </ClientProvider>
    </ThemeProvider>
  );
}

export default App;
