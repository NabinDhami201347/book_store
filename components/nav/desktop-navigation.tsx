import { FcLibrary } from "react-icons/fc";

import CommandMenu from "@/components/nav/command-menu";
import ThemeToggle from "@/components/theme-toogle";

const DesktopNavigation = () => {
  return (
    <nav className="flex w-11/12 mx-auto items-center justify-between">
      <div className="flex items-center gap-4">
        <FcLibrary className="h-6 w-6" />
        Book Store
      </div>

      <div className="flex items-center gap-4">
        <CommandMenu />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default DesktopNavigation;
