"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { Home, Inbox, Calendar } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { TUserRoles, userRoles } from "@/auth/authinterface";
import LogoutButton from "../logout_component/logout_button";

export function AppSidebar() {
  const { user } = useAppSelector((state) => state.auth);
  const role = user?.role as TUserRoles;
  const items = [
    {
      title: "Dashboard",
      url: `/${role?.toLowerCase()}`,
      icon: Home,
      roles: [...Object.values(userRoles)],
    },
    {
      title: "Manage Supervisor",
      url: "/admin/manage-supervisor",
      icon: Inbox,
      roles: userRoles.ADMIN,
    },
    {
      title: "Manage Team",
      url: "/supervisor/manage-team",
      icon: Calendar,
      roles: userRoles.SUPERVISOR,
    },
    {
      title: "Manage Employee",
      url: "/supervisor/manage-employee",
      icon: Calendar,
      roles: userRoles.SUPERVISOR,
    },
    {
      title: "Manage Project",
      url: `/${role?.toLowerCase()}/manage-projects`,
      icon: Calendar,
      roles: [userRoles.LEADER, userRoles.EMPLOYEE, userRoles.SUPERVISOR],
    },
  ];

  const pathname = usePathname();
  console.log(pathname, "ffff");
  return (
    <div className="relative flex h-full flex-col bg-background text-foreground">
      <Sidebar className="">
        <SidebarHeader className="shadow">
          <div className="w-full  font-bold  text-xl text-center">
            ProjectPulse
          </div>
        </SidebarHeader>
        <SidebarContent className="">
          <SidebarGroup>
            {/* SidebarGroupLabel if needed */}
            <SidebarGroupContent>
              <SidebarMenu>
                {items
                  .filter((item) => item.roles.includes(role))
                  .map((item) => {
                    const isActive = pathname === item.url;
                    return (
                      <SidebarMenuItem
                        key={item.title}
                        className={`${
                          isActive
                            ? "bg-muted text-black dark:text-foreground rounded-md"
                            : "text-black dark:text-muted-foreground"
                        } hover:bg-muted hover:text-foreground rounded-md transition-colors`}
                      >
                        <SidebarMenuButton asChild>
                          <Link
                            href={item.url}
                            className="flex items-center gap-2 px-3 py-2"
                          >
                            <item.icon className="h-5 w-5" />
                            <span className="text-base font-medium">
                              {item.title}
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <LogoutButton />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
