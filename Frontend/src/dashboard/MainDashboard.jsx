import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useEffect } from "react";

const MainDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/main-dashboard") {
      navigate("/main-dashboard/dashboard");
    }
  }, [location, navigate]);
  return (
    <div className="flex max-h-full my-5">
      <SideBar />
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainDashboard;
