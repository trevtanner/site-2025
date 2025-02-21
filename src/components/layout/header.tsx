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

export function Header() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="flex items-center justify-between w-full px-8 py-4 !max-w-full fixed bg-gray-800">
      <div className="w-15">
        <img src="TTlogoBlkBG50.jpg" alt="Logo" />
      </div>
      {pathname.startsWith("/pokedex") ? (
        <NavigationMenuList className="!flex-none">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-white p-2">
                EXIT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      ) : (
        <NavigationMenuList className="!flex-none">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-white p-2">
                HOME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-white p-2">
                ABOUT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-white p-2">
                PORTFOLIO
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:underline text-white p-2">
                RESUME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      )}
    </NavigationMenu>
  );
}
