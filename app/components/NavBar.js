"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  const routes = [
    {
      href: "/",
      label: "Employee List",
      active: pathname === "/",
    },
    {
      href: "/edit",
      label: "Edit Employee",
      active: pathname === "/edit",
    },
    {
      href: "/add",
      label: "Add Employee",
      active: pathname === "/add",
    },
  ];

  return (
    <nav className="flex items-center space-x-4 py-4 lg:space-x-6 ">
      {routes.map((route) => {
        return (
          <Link
            key={route.href}
            href={route.href}
            className={`text-sm font-semibold transition-colors hover:text-gray-600 ${
              route.active ? "text-black" : "text-gray-400"
            }`}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
