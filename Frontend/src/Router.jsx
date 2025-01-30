import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import FindInvoice from "./pages/FindInvoice";
import Blog from "./pages/Blog";
import Conditions from "./pages/Conditions";
import Gallary from "./pages/Gallary";
import Account from "./pages/Account";
import BusSitPlanDetails from "./pages/BusSitPlanDetails";
import MainDashboard from "./dashboard/MainDashboard";
import DashboardPage from "./dashboard/DashboardPage";
import OrdersPage from "./dashboard/OrdersPage";
import DownloadsPage from "./dashboard/DownloadsPage";
import AddressPage from "./dashboard/AddressPage";
import AccountDetailsPage from "./dashboard/AccountDetailsPage";
import LogoutPage from "./dashboard/LogoutPage";
import SingleSitDetails from "./pages/SingleSitDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-invoice",
        element: <FindInvoice />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/condition",
        element: <Conditions />,
      },
      {
        path: "/gallary",
        element: <Gallary />,
      },
      {
        path: "/my-account",
        element: <Account />,
      },
      {
        path: "/sit-plan",
        element: <BusSitPlanDetails />,
      },
      {
        path: "/single-sit-plan",
        element: <SingleSitDetails />,
      },
      {
        path: "/main-dashboard",
        element: <MainDashboard />,
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          { path: "orders", element: <OrdersPage /> },
          { path: "downloads", element: <DownloadsPage /> },
          { path: "addresses", element: <AddressPage /> },
          { path: "account-details", element: <AccountDetailsPage /> },
          { path: "logout", element: <LogoutPage /> },
        ],
      },
    ],
  },
]);

export default router;
