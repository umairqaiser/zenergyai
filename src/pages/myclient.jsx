import DashboardLayout from "../hoc/layout/dashboardLayout";
import MyClientComponent from "../components/myclient";

const MyClientPage = () => {
  return (
    <DashboardLayout>
      <MyClientComponent />
    </DashboardLayout>
  );
};

export default MyClientPage;
