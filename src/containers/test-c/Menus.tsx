import {
  dashboardIcon,
  adminIcon,
  articleIcon,
  pipeIcon,
} from "@/assets/icons";

import MenuItems from "./MenuItems";

const menuItems = [
  {
    title: "Dashboard",
    icon: dashboardIcon,
    hasSubmenu: false,
    href: "dashboard",
  },
  {
    title: "Admin",
    icon: adminIcon,
    hasSubmenu: false,
    href: "admin",
  },
  {
    title: "Article",
    icon: articleIcon,
    href: "/",
    hasSubmenu: true,
    submenu: [{ title: "Blog", href: "blog", icon: pipeIcon }],
  },
];

const Menus = () => {
  return (
    <div className="my-5 flex flex-col gap-2 py-10">
      {menuItems.map((items) => (
        <MenuItems key={items.title} items={items} />
      ))}
    </div>
  );
};

export default Menus;
