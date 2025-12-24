import { useParams } from "react-router-dom";
import DashboardLayout from "../hoc/layout/dashboardLayout";
import NewAssesmentComponent from "../components/newassesment";

const NewAssesmentPage = () => {
  const { clientId, clientName } = useParams();
  const decodedName = decodeURIComponent(clientName || "Client");

  return (
    <DashboardLayout clientName={decodedName} isNewAssessment={true}>
      <NewAssesmentComponent />
    </DashboardLayout>
  );
};

export default NewAssesmentPage;
