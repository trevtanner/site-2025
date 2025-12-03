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
        <Link href="/" passHref>
          <img src="TTlogoBlkBG50.jpg" alt="Logo" />
        </Link>
      </div>
      {pathname.startsWith("/pokedex") ? (
        <NavigationMenuList className="!flex-none">
          <NavigationMenuItem>
            <NavigationMenuLink
              className="hover:underline text-tertiary-100 p-2"
              asChild
            >
              <Link href="/" passHref>
                EXIT
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      ) : pathname.startsWith("/weatherApp") ? (
        <NavigationMenuList className="!flex-none">
          <NavigationMenuItem>
            <NavigationMenuLink
              className="hover:underline text-tertiary-100 p-2"
              asChild
            >
              <Link href="/" passHref>
                EXIT
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      ) : (
        <div>
          <NavigationMenuList className="!flex-none">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="hover:underline text-tertiary-100 p-2"
                asChild
              >
                <Link href="/" passHref>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className="hover:underline text-tertiary-100 p-2">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuLink
                className="hover:underline text-tertiary-100 p-2"
                asChild
              >
                <Link href="/portfolio" passHref>
                  Portfolio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="hover:underline text-tertiary-100 p-2"
                asChild
              >
                <Link href="/resume" passHref>
                  Resume
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="hover:underline text-tertiary-100 p-2"
                asChild
              >
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      )}
    </NavigationMenu>
  );
}
