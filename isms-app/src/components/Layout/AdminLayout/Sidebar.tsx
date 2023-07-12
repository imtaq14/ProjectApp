import clsx from "clsx";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES_PATHS } from "../../../../constants";

const sidebarMenus = {
  main: [
    {
      icon: "/images/icon-dashboard.svg",
      label: "Dashboard",
      href: ROUTES_PATHS.ADMIN,
    },
    {
      icon: "/images/icon-ticket.svg",
      label: "Ticket",
      href: ROUTES_PATHS.ADMIN_TICKET,
    },
    {
      icon: "/images/icon-user.svg",
      label: "User",
      href: ROUTES_PATHS.ADMIN_USER,
    },
    {
      icon: "/images/icon-report.svg",
      label: "Report",
      href: ROUTES_PATHS.ADMIN_REPORT,
    },
  ],
  sub: [
    {
      icon: "/images/icon-setting.svg",
      label: "Setting",
      // href: ROUTES_PATHS.ADMIN_SETTING,
    },
    {
      icon: "/images/icon-contact.svg",
      label: "Contact us",
      // href: ROUTES_PATHS.ADMIN_CONTACT,
    },
  ],
};

const MenuList = ({ menus, currentPath, onNavigate }) => {
  return (
    <ul className="space-y-[35px]">
      {menus.map((item) => {
        const isActive = item.href === currentPath;
        return (
          <li
            key={item.label}
            onClick={() => {
              if (item?.href) onNavigate?.(item?.href);
            }}
            className={clsx(
              "flex space-x-4 items-center pr-5 rounded-l-[20px] py-4 text-2xl cursor-pointer transition-all",
              isActive
                ? "bg-[#B9D9EB] font-bold pl-2.5"
                : "pl-5 hover:bg-[#B9D9EB] hover:font-bold hover:pl-2.5"
            )}
          >
            <img src={item.icon} alt="" />
            <div className="flex items-center flex-1 justify-between">
              <span>{item.label}</span>
              {isActive && <img src="/images/arrow.svg" alt="" />}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <aside className="bg-[#E0ECF2] pl-2 flex space-y-[70px] flex-col w-[300px] h-screen absolute top-0 left-0 shadow-xl">
      <div className="flex w-[200px] mx-auto">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto justify-between space-y-4 pb-10 pl-5 font-poppins">
        <MenuList
          menus={sidebarMenus.main}
          currentPath={location?.pathname}
          onNavigate={navigate}
        />
        <MenuList
          menus={sidebarMenus.sub}
          currentPath={location?.pathname}
          onNavigate={navigate}
        />
      </div>
    </aside>
  );
};

export default Sidebar;