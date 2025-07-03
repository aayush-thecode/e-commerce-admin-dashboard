"use client";
import Link from "next/link";
import {
  LuLayoutDashboard,
  LuTags,
  LuBox,
  LuUser,
} from "react-icons/lu";
import { CgMenuBoxed } from "react-icons/cg";
import { TbUsersGroup } from "react-icons/tb";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Dashboard", icon: LuLayoutDashboard, href: "/" },
  { label: "Food category", icon: LuTags, href: "/category" },
  { label: "Menu", icon: LuBox, href: "/menu" },
  { label: "Orders", icon: CgMenuBoxed, href: "/orders" },
  { label: "Users", icon: TbUsersGroup, href: "/users" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-[250px] bg-gradient-to-b from-orange-100 to-orange-200 text-orange-900 flex flex-col py-6 px-5 shadow-lg">
      {/* Logo/Brand */}
      <div className="mb-10">
        <Link href="/" className="text-3xl font-extrabold tracking-tight text-orange-600">
          🍔 FoodAdmin
        </Link>
      </div>

      {/* Nav Items */}
      <nav className="space-y-3 flex-1">
        {navItems.map(({ label, icon: Icon, href }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg transition font-medium",
              pathname === href
                ? "bg-orange-500 text-white shadow-md"
                : "hover:bg-orange-300 hover:text-white"
            )}
          >
            <Icon size={20} />
            <span className="text-sm">{label}</span>
          </Link>
        ))}
      </nav>

      {/* Profile Shortcut */}
      <div className="mt-auto border-t pt-4 border-orange-300">
        <Link
          href="/profile"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-orange-300 transition text-sm"
        >
          <LuUser size={20} />
          Profile
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
