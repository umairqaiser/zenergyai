import { useParams } from "react-router-dom";
import DashboardLayout from "../hoc/layout/dashboardLayout";
import AssesmentHistory from "../components/assesmenthistory";

const ClientDetailPage = () => {
  const { clientId, clientName } = useParams();
  const decodedName = decodeURIComponent(clientName || "Client");

  return (
    <DashboardLayout clientName={decodedName}>
      <AssesmentHistory clientName={decodedName} />
    </DashboardLayout>
  );
};

export default ClientDetailPage;
