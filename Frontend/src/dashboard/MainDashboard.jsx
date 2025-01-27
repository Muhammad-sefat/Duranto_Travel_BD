import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const MainDashboard = () => {
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
