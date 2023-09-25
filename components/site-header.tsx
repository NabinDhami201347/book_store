import { FcFlashAuto } from "react-icons/fc";
import { Button } from "@/components/ui/button";

import MobileNavigation from "@/components/nav/mobile-nav";
import DesktopNavigation from "@/components/nav/desktop-navigation";

const SiteHeader = () => {
  return (
    <nav className="flex items-center w-full py-2 border-b">
      <div className="hidden sm:block w-full">
        <DesktopNavigation />
      </div>

      <div className="flex items-center w-11/12 mx-auto justify-between sm:hidden">
        <MobileNavigation />
        <Button size="sm" variant="outline">
          <FcFlashAuto className="mr-2" />
          Signup
        </Button>
      </div>
    </nav>
  );
};

export default SiteHeader;
