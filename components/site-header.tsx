import { FcFlashAuto } from "react-icons/fc";

import DesktopNavigation from "@/components/nav/desktop-navigation";
import MobileNavigation from "@/components/nav/mobile-nav";
import CommandMenu from "@/components/nav/command-menu";
import { Button } from "@/components/ui/button";
import Cart from "@/components/cart";

import { getServerSession } from "next-auth";
import Link from "next/link";

const SiteHeader = async () => {
  const session = await getServerSession();

  return (
    <nav className="fixed top-0 right-0 z-50 bg-background h-16 flex items-center w-full py-2 border-b">
      <div className="hidden sm:block w-full">
        <DesktopNavigation />
      </div>

      <div className="flex items-center w-11/12 gap-4 mx-auto justify-between sm:hidden">
        <MobileNavigation />
        <div className="flex items-center w-full gap-4">
          <CommandMenu />
          {session?.user?.name ? (
            <>
              <Cart />
            </>
          ) : (
            <Link href="/login">
              <Button size="sm" variant="outline">
                <FcFlashAuto className="mr-2" />
                Signup
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
