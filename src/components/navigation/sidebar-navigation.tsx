"use client";

import React, { useState } from "react";
import { ChevronLeft, Menu, LogOut } from "lucide-react";
import { MenuItem } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarNavigationProps {
  items: MenuItem[];
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ items }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <aside
      className={`
        ${isExpanded ? "w-64" : "w-16"} 
        relative 
        min-h-screen 
        rounded-xl bg-white text-zinc-950 shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] transition-all
        duration-300
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-12 bg-orange-500 text-white p-1 rounded-full"
      >
        {isExpanded ? <ChevronLeft size={20} /> : <Menu size={20} />}
      </button>

      {/* Logo Section */}
      <div className="p-4 border-b border-zinc-100">
        {isExpanded ? (
          <h1 className="text-xl font-bold">John Doe</h1>
        ) : (
          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
            <span className="font-bold">J</span>
          </div>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="mt-6">
        {items.map((item, index) => {
          const isActive = pathname === item.path;
          const isOnSamePosition =
            index > 0 && item.position === items[index - 1].position;

          return (
            <>
              {isOnSamePosition && <hr />}
              <Link
                key={index}
                href={item.path}
                className={`
                flex items-center
                gap-3
                px-4 py-3 m-1
                rounded-lg
                hover:bg-orange-500
                hover:text-white
                hover:font-semibold
                transition-colors
                ${!isExpanded && "justify-center"}
                ${isActive && "bg-orange-100"}
              `}
              >
                <item.icon size={20} />
                {isExpanded && <span>{item.title}</span>}
              </Link>
            </>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 w-full border-t border-zinc-100">
        <button
          onClick={() => void console.log("Logout")}
          className={`
            w-full
            flex items-center
            gap-3
            px-4 py-3
            hover:bg-zinc-900
            hover:text-white
            hover:font-semibold
            transition-colors
            ${!isExpanded && "justify-center"}
          `}
        >
          <LogOut size={20} />
          {isExpanded && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default SidebarNavigation;
