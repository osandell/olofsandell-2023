import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const hasLoaded = useSignal(false);

  useVisibleTask$(() => {
    hasLoaded.value = true;
  });

  return (
    <section class="flex w-full h-screen items-center justify-center flex-col bg-black">
      <div
        class={`relative max-w-lg lg:max-w-3xl m-4 flex flex-col items-center b`}
      >
        <h2 class="font-bold text-center text-3xl md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-white z-10 mb-6 ">
          Coming up...
        </h2>
      </div>
    </section>
  );
});
