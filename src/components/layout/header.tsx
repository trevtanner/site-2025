"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="flex items-center justify-between px-8 py-4 bg-primary header nav-text sticky top-0 z-50">
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
            {/* <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
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
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      )}
    </NavigationMenu>
  );
}
