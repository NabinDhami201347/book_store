import Banner from "@/components/banner";
import Books from "@/components/books";

export default async function Home() {
  return (
    <main className="w-11/12 mx-auto my-2">
      <Banner label="Opps! Its seems like you are unauthoized!!" />

      <Books />
    </main>
  );
}
