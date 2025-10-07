import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { ShoppingCart, Users, Box, UserCheck, Settings, Coins } from "lucide-react";

const menuItems = [
  { title: "POS", icon: <ShoppingCart size={32} />, link: "/pos" },
  { title: "Products", icon: <Box size={32} />, link: "/products" },
  { title: "Sales", icon: <Coins size={32} />, link: "/sales" },
  { title: "Members", icon: <Users size={32} />, link: "/members" },
  { title: "Packages", icon: <Box size={32} />, link: "/packages" },
  { title: "Instructors", icon: <UserCheck size={32} />, link: "/instructors" },
//   { title: "Settings", icon: <Settings size={32} />, link: "/settings" },
];

export function Home() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-10 text-center">
        Welcome to GymApp
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Link
            to={item.link}
            key={item.title}
            className={clsx(
              "bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl",
              "border-2 border-transparent hover:border-indigo-600"
            )}
          >
            <div className="text-indigo-600 mb-4">{item.icon}</div>
            <span className="font-semibold text-lg">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
