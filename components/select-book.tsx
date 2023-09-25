import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SelectBookProps {
  color?: string;
}

const bookCategories: string[] = [
  "Fiction",
  "Non-Fiction",
  "Reference",
  "Academic",
  "Cookbooks",
  "Travel",
  "Poetry",
  // "Religious and Spiritual",
  // "Graphic Novels and Comics",
  // "Children's Books",
  // "Art and Photography",
  // "Business and Finance",
  // "Science Fiction and Fantasy",
  // "Horror",
  // "Drama and Plays",
  // "Essays",
  // "Political and Social Commentary",
  // "Philosophy",
  // "True Crime",
  // "Parenting and Family",
];

const SelectBook = ({ color }: SelectBookProps) => {
  return (
    <Select>
      <SelectTrigger className={cn("w-[180px] transition-all ease-in-out", color ? color : "text-purple-200")}>
        <SelectValue placeholder={bookCategories[0]} />
      </SelectTrigger>
      <SelectContent>
        {bookCategories.map((book) => (
          <SelectItem key={book} value={book}>
            {book}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectBook;
