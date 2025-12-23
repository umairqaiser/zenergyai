import DashboardLayout from "../hoc/layout/dashboardLayout";
import MainDashboard from "../components/maindashboard";
import SearchClient from "../components/searchclient";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <MainDashboard />
      <SearchClient />
    </DashboardLayout>
  );
};

export default Dashboard;
