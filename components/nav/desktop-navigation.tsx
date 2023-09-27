import { FcFlashAuto, FcLibrary } from "react-icons/fc";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import CommandMenu from "@/components/nav/command-menu";
import ThemeToggle from "@/components/theme-toogle";
import Cart from "@/components/cart";

const DesktopNavigation = async () => {
  const session = await getServerSession();

  return (
    <nav className="flex w-11/12 mx-auto items-center justify-between">
      <div className="flex items-center gap-4">
        <FcLibrary className="h-6 w-6" />
        Book Store
      </div>

      <CommandMenu />

      <div className="flex items-center gap-2">
        {session?.user?.name ? (
          <>
            <Button className="flex items-center gap-2" variant="secondary">
              {session?.user?.name!}
              <Avatar>
                <AvatarImage src={session?.user?.image!} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>

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
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default DesktopNavigation;
