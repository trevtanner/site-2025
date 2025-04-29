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

export function Header() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="flex items-center justify-between px-8 py-4 bg-primary header">
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
        <NavigationMenuList className="!flex-none">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                HOME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                ABOUT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                PORTFOLIO
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                RESUME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      )}
    </NavigationMenu>
  );
}
