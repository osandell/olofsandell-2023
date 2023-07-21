import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero/hero";
import About from "~/components/about/about";

export default component$(() => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
});

export const head: DocumentHead = {
  title: "Olof Sandell",
  meta: [
    {
      name: "description",
      content: "A portfolio to showcase some of my projects.",
    },
  ],
};
