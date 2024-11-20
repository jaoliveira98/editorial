"use client";

import { Home, Settings, LucideIcon, NotebookPen } from "lucide-react";

export interface MenuItem {
  position: number;
  title: string;
  icon: LucideIcon;
  path: string;
}

export const dashboardItems: MenuItem[] = [
  {
    position: 0,
    title: "New Article",
    icon: NotebookPen,
    path: "/create-article",
  },
  {
    position: 1,
    title: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    position: 1,
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];
