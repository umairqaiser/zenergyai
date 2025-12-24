import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Signin from "../pages/signin";
import MyClientPage from "../pages/myclient";
import ClientDetailPage from "../pages/clientdetail";
import NewAssesmentPage from "../pages/newassesment";

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
  {
    path: "/myclients/:clientId/:clientName",
    element: <ClientDetailPage />,
  },
  {
    path: "/myclients/:clientId/:clientName/new-assessment",
    element: <NewAssesmentPage />,
  },
]);

export default router;
