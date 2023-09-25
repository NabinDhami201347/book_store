import { Button } from "@/components/ui/button";

import Banner from "@/components/banner";

export default function Home() {
  return (
    <main className="w-11/12 mx-auto my-10">
      <Banner label="Hello World" />
      <Banner label="Hello World" variant="danger" />
      <Banner label="Hello World" variant="success" />

      <h2>Hello World!!</h2>

      <Button>Hello World!!</Button>
    </main>
  );
}
