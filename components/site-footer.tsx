import { formatDate } from "@/lib/formatDate";

const SiteFooter = () => {
  return (
    <footer className="py-2 flex items-center justify-center border-t w-full gap-2 text-zinc-600  dark:text-zinc-300">
      <p className="text-sm">&copy; Book Store || {formatDate()}</p>
    </footer>
  );
};

export default SiteFooter;
