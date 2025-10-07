import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  ShoppingCart,
  Users,
  Box,
  UserCheck,
  Settings as SettingsIcon,
} from "lucide-react";

export default function Navbar() {
  const navItems = [
    { title: "Home", link: "/", icon: <HomeIcon size={20} /> },
    // { title: "POS", link: "/pos", icon: <ShoppingCart size={20} /> },
    // { title: "Members", link: "/members", icon: <Users size={20} /> },
    // { title: "Packages", link: "/packages", icon: <Box size={20} /> },
    // { title: "Instructors", link: "/instructors", icon: <UserCheck size={20} /> },
    // { title: "Settings", link: "/settings", icon: <SettingsIcon size={20} /> },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800">
      <Link to="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-500">
        <HomeIcon size={24} />
        <span className="font-bold text-lg">GymApp</span>
      </Link>

      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.link}
            className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition"
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
