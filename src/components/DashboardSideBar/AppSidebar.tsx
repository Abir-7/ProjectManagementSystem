"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

// Menu items.
import { Home, Inbox, Calendar } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import LogoutButton from "../LogoutComponent/LogoutButton";

const items = [
  // all
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    roles: ["ADMIN", "SUPERVISOR", "LEADER", "EMPLOYEE"],
  },
  // admin
  {
    title: "Manage Supervisor",
    url: "/admin/manage-supervisor",
    icon: Inbox,
    roles: ["ADMIN"],
  },
  // supervisor
  {
    title: "Manage Team",
    url: "/supervisor/manage-team",
    icon: Calendar,
    roles: ["SUPERVISOR"],
  },

  // leader
  {
    title: "Manage Employee",
    url: "/leader/mamage-employee",
    icon: Calendar,
    roles: ["LEADER"],
  },
  {
    title: "Manage Project",
    url: "/leader/manage-projects",
    icon: Calendar,
    roles: ["LEADER"],
  },
];

export function AppSidebar() {
  const { user } = useAppSelector((state) => state.auth);

  const role = user?.role as string;
  const pathname = usePathname();

  const [selectedPath, setSelectedPath] = useState(pathname);
  return (
    <div className="relative ">
      <Sidebar className="absolute ">
        <SidebarContent className="bg-gray-900">
          <SidebarGroup className="text-white">
            {/* <SidebarGroupLabel className="text-white text-lg">
              Application
            </SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {items
                  .filter((item) => item.roles.includes(role))
                  .map((item) => (
                    <SidebarMenuItem
                      key={item.title}
                      className={`${
                        selectedPath === item.url
                          ? "bg-gray-50 w-full text-gray-900 rounded-md"
                          : ""
                      } hover:bg-gray-50  hover:rounded-md`}
                    >
                      <SidebarMenuButton
                        className=" active:text-gray-900 hover:bg-transparent  hover:text-gray-900 h-10 "
                        asChild
                      >
                        <Link
                          onClick={() => setSelectedPath(item.url)}
                          href={item.url}
                        >
                          <item.icon />
                          <span className={`text-lg `}>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <div className="mt-auto p-2 bg-gray-900 ">
          <LogoutButton></LogoutButton>
        </div>
      </Sidebar>
    </div>
  );
}
