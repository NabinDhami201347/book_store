"use client";

import { FcFlashAuto } from "react-icons/fc";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import DesktopNavigation from "@/components/nav/desktop-navigation";
import MobileNavigation from "@/components/nav/mobile-nav";
import CommandMenu from "@/components/nav/command-menu";
import Cart from "@/components/cart";

const SiteHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <nav className="fixed top-0 right-0 z-50 bg-background h-16 flex items-center w-full py-2 border-b">
      <div className="hidden sm:block w-full">
        <DesktopNavigation />
      </div>

      <div className="flex items-center w-11/12 gap-4 mx-auto justify-between sm:hidden">
        <MobileNavigation />
        <div className="flex items-center w-full gap-4">
          <CommandMenu />

          {isLoggedIn ? (
            <Cart />
          ) : (
            <Button onClick={handleClick} size="sm" variant="outline">
              <FcFlashAuto className="mr-2" />
              Signup
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
