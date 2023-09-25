import Image, { StaticImageData } from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcShipped } from "react-icons/fc";

interface BookCardProps {
  img: StaticImageData;
  label?: string;
}

const BookCard = ({ img, label }: BookCardProps) => {
  return (
    <Card>
      <CardContent className="brightness-90 p-0">
        <Image
          alt={label ? label : "images"}
          placeholder="blur"
          src={img}
          width={720}
          height={480}
          className="rounded-lg"
        />
      </CardContent>

      <CardFooter className="w-full my-2 p-2">
        <Button variant="outline" className="w-full flex items-center gap-2">
          <FcShipped className="h-5 w-5" />
          Borrow
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
