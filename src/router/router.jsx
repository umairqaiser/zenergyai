import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Signin from "../pages/signin";
import MyClientPage from "../pages/myclient";

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
  {
    path: "/myclients",
    element: <MyClientPage />,
  },
]);

export default router;
