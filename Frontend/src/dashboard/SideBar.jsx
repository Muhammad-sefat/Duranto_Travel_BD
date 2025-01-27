import { NavLink } from "react-router-dom";

const SideBar = () => {
  const menuItems = [
    { name: "Dashboard", path: "dashboard" },
    { name: "Orders", path: "orders" },
    { name: "Downloads", path: "downloads" },
    { name: "Addresses", path: "addresses" },
    { name: "Account Details", path: "account-details" },
    { name: "Logout", path: "logout" },
  ];

  return (
    <nav className="w-64 bg-gray-100 max-h-full p-4 pl-10">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold underline"
                  : "text-gray-600 hover:text-blue-400"
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
