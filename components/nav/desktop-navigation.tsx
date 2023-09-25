"use client";

import { FcFlashAuto, FcLibrary } from "react-icons/fc";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import CommandMenu from "@/components/nav/command-menu";
import ThemeToggle from "@/components/theme-toogle";
import Cart from "@/components/cart";

const DesktopNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <nav className="flex w-11/12 mx-auto items-center justify-between">
      <div className="flex items-center gap-4">
        <FcLibrary className="h-6 w-6" />
        Book Store
      </div>

      <CommandMenu />

      <div className="flex items-center gap-2">
        <ThemeToggle />

        {isLoggedIn ? (
          <Cart />
        ) : (
          <Button onClick={handleClick} size="sm" variant="outline">
            <FcFlashAuto className="mr-2" />
            Signup
          </Button>
        )}
      </div>
    </nav>
  );
};

export default DesktopNavigation;
