"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

export function Header() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="flex items-center justify-between px-8 py-4 bg-primary header nav-text">
      <div className="w-15 hover:cursor-pointer">
        <Link href="/" legacyBehavior passHref>
          <img src="TTlogoBlkBG50.jpg" alt="Logo" />
        </Link>
      </div>
      {pathname.startsWith("/pokedex") ? (
        <NavigationMenuList className="!flex-none">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                EXIT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      ) : pathname.startsWith("/weatherApp") ? (
        <NavigationMenuList className="!flex-none">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                EXIT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      ) : (
        <div>
          <NavigationMenuList className="!flex-none">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resume" legacyBehavior passHref>
                <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                  Resume
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      )}
    </NavigationMenu>
  );
}
