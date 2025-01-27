import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import DashboardPage from "./DashboardPage";
import OrdersPage from "./OrdersPage";
import DownloadsPage from "./DownloadsPage";
import AddressPage from "./AddressPage";
import AccountDetailsPage from "./AccountDetailsPage";
import LogoutPage from "./LogoutPage";

const MainDashboard = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/main-dashboard/dashboard" element={<DashboardPage />} />
          <Route path="/main-dashboard/orders" element={<OrdersPage />} />
          <Route path="/main-dashboard/downloads" element={<DownloadsPage />} />
          <Route path="/main-dashboard/addresses" element={<AddressPage />} />
          <Route
            path="/main-dashboard/account-details"
            element={<AccountDetailsPage />}
          />
          <Route path="/main-dashboard/logout" element={<LogoutPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainDashboard;
