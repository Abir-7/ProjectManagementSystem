"use client";
import { Calendar, Home, Inbox } from "lucide-react";

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
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Add Project",
    url: "/add-project",
    icon: Inbox,
  },
  {
    title: "Add Admins & Leads",
    url: "/admins&leads",
    icon: Calendar,
  },
  {
    title: "Add Team",
    url: "/add-team",
    icon: Calendar,
  },
  {
    title: "Add Employee",
    url: "/add-employee",
    icon: Calendar,
  },
  // {
  //   title: "Search",
  //   url: "#",
  //   icon: Search,
  // },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  // },
];

export function AppSidebar() {
  const pathname = usePathname();
  console.log(pathname);
  const [selectedPath, setSelectedPath] = useState(pathname);
  return (
    <div className="relative ">
      <Sidebar className="absolute ">
        <SidebarContent className="bg-emerald-400">
          <SidebarGroup className="text-white">
            {/* <SidebarGroupLabel className="text-white text-lg">
              Application
            </SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className={`${
                      selectedPath === item.url
                        ? "bg-gray-50 w-full text-emerald-400 rounded-md"
                        : ""
                    } hover:bg-gray-50  hover:rounded-md`}
                  >
                    <SidebarMenuButton
                      className=" active:text-emerald-400 hover:bg-transparent  hover:text-emerald-400 h-10 "
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
      </Sidebar>
    </div>
  );
}
