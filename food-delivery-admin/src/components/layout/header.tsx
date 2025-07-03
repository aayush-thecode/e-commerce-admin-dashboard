"use client";
import Link from "next/link";
import { useAuth } from "@/context/auth.context";
import { IoIosLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between h-16 px-8 bg-gradient-to-r from-orange-700 via-orange-600 to-pink-600 shadow-lg text-white">
      {/* Left: Greeting */}
      <div className="text-lg font-semibold drop-shadow-sm">
        👋 Welcome back, {user?.firstName ?? "Admin"}!
      </div>

      {/* Right: User Info and Actions */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 bg-opacity-20 text-gray-600 bg-amber-50 backdrop-blur-sm rounded-full px-5 py-2 shadow-md">
          <FaUserCircle size={34} className="text-black" />
          <div className="flex flex-col">
            <span className="font-semibold">{user?.email || "admin@example.com"}</span>
            <Link
              href="/profile"
              className="text-orange-700 hover:text-amber-600 transition underline underline-offset-2"
            >
              View Profile
            </Link>
          </div>
        </div>

        <button
          onClick={logout}
          aria-label="Logout"
          title="Logout"
          className="flex items-center gap-2 bg-white bg-opacity-30 hover:bg-opacity-50 transition rounded-lg px-4 py-2 font-semibold shadow-md text-orange-600"
        >
          <IoIosLogOut size={26} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
