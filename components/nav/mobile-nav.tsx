import { FcLibrary, FcReadingEbook } from "react-icons/fc";
import { BiMenuAltLeft } from "react-icons/bi";

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import ThemeToggle from "@/components/theme-toogle";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <BiMenuAltLeft className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col">
        <SheetHeader className="border-b pb-2">
          <SheetTitle className="flex items-center gap-4">
            <FcLibrary className="h-6 w-6" />
            <p className="text-lg">Book Store</p>
          </SheetTitle>
        </SheetHeader>

        <SheetFooter className="mt-auto border-t py-2 flex flex-row gap-4 items-center">
          <ThemeToggle />
          <Button variant="outline" size="icon">
            <FcReadingEbook className="h-6 w-6" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
