"use client";
import React, { RefAttributes } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const menus: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Sales",
    href: "/sales",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Sign in",
    href: "/login",
  },
];

export const Navigation = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const pathname = usePathname();
  
  return (
    <NavigationMenu>
      <NavigationMenuList className={cn("flex", className)}>
        {menus.map((menu, index) => {
          let isActive = pathname == menu.href;
          return (
            <NavigationMenuItem
              key={index}
              className={cn(
                menu.href == "/login" ? "lg:hidden block " : "",
                isActive ? "text-orange-500" : ""
              )}
            >
              <Link href={menu.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle}>
                  {menu.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
