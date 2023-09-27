import Banner from "@/components/banner";
import Books from "@/components/books";

import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="w-11/12 mx-auto my-2">
      {!session && <Banner label="Opps! Its seems like you are unauthoized!!" />}

      <Books />
    </main>
  );
}
