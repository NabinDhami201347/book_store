import BookCard from "@/components/book-card";
import SelectBook from "@/components/select-book";

import img1 from "@/public/images/pic1.avif";
import img2 from "@/public/images/pic2.avif";
import img3 from "@/public/images/pic3.avif";
import img4 from "@/public/images/pic4.avif";
import img5 from "@/public/images/pic5.avif";
import img6 from "@/public/images/pic6.avif";
import img7 from "@/public/images/pic7.avif";
import img8 from "@/public/images/pic8.avif";

const Books = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="flex flex-col gap-10 my-10">
      <div>
        <SelectBook color="text-emerald-200" />
        <div className="grid sm:grid-cols-4 gap-2 my-4">
          {images.map((img, index) => (
            <BookCard key={index} img={img} />
          ))}
        </div>
      </div>

      <div>
        <SelectBook />
        <div className="grid sm:grid-cols-4 gap-2 my-4">
          {images.map((img, index) => (
            <BookCard key={index} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
