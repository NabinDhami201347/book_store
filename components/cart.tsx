import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcLibrary } from "react-icons/fc";
import Image from "next/image";

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Banner from "@/components/banner";

import Empty from "@/public/svgs/empty.svg";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <AiOutlineShoppingCart className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col">
        <SheetHeader className="border-b pb-2">
          <SheetTitle className="flex items-center gap-4">
            <FcLibrary className="h-6 w-6" />
            <p className="text-lg">My Cart</p>
          </SheetTitle>
        </SheetHeader>
        <Banner label="Cart is empty" />

        <div className="mt-auto text-center">
          <Image alt="empty cart" src={Empty} width={720} height={480} className="rounded-lg" />
        </div>

        <SheetFooter className="mt-auto border-t py-2   items-center">
          <Button variant="destructive" className="w-full" disabled={true}>
            Delete Cart
          </Button>
          <Button className="bg-green-600 w-full hover:bg-green-700 text-white my-2">Instant Payment</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
