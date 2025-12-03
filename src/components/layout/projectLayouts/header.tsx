"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function ProjectsHeader() {
  return (
    <NavigationMenu className="flex items-center justify-between w-full px-8 py-2 !max-w-full fixed bg-gray-400">
      <div className="w-15">
        <img src="TTlogoBlkBG50.jpg" alt="Logo" />
      </div>
      <NavigationMenuList className="!flex-none">
        <NavigationMenuItem>
          <Link href="/" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Exit
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
