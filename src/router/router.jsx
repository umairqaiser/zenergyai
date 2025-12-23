import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Signin from "../pages/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
