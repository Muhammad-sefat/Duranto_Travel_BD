import { NavLink } from "react-router-dom";

const SideBar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/main-dashboard/dashboard" },
    { name: "Orders", path: "/main-dashboard/orders" },
    { name: "Downloads", path: "/main-dashboard/downloads" },
    { name: "Addresses", path: "/main-dashboard/addresses" },
    { name: "Account details", path: "/main-dashboard/account-details" },
    { name: "Log out", path: "/main-dashboard/logout" },
  ];

  return (
    <nav className="w-64 bg-gray-100 h-full p-4">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
