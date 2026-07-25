import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import PieChartComponent from "../components/PieChartComponent";
import RecentOrders from "../components/RecentOrders";
import TopProducts from "../components/TopProducts";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="md:ml-64 p-4 md:p-6 bg-gray-100 dark:bg-[#0f172a] min-h-screen overflow-x-hidden">
        <StatsCard />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>

          <PieChartComponent />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          <div className="xl:col-span-2">
            <RecentOrders />
          </div>

          <TopProducts />
        </div>
      </div>
    </>
  );
};

export default Dashboard;