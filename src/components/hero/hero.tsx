import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const PartialUnderline = () => (
  <span class="partial-underline md:partial-underline lg:partial-underline" />
);

function scrollToAbout() {
  const element = document.getElementById("about");
  if (!element) {
    return;
  }
  const headerOffset = 135; // Replace with the height of your header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

export default component$(() => {
  const hasLoaded = useSignal(false);

  useVisibleTask$(() => {
    hasLoaded.value = true;
  });

  return (
    <section class="flex w-full h-screen items-center justify-center flex-col">
      <Image
        src="/hero-bg.jpg"
        layout="fullWidth"
        width={1200}
        height={900}
        priority={true}
        alt="hero"
        class="absolute inset-0 object-cover w-full h-full"
      />

      <div
        class={`relative max-w-lg lg:max-w-3xl m-4 flex flex-col items-center `}
      >
        <h2 class="font-bold text-center text-3xl md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-white z-10 mb-6 ">
          {$localize`From `}
          <span style={{ position: "relative", display: "inline-block" }}>
            {$localize`frontend`}
            <PartialUnderline />
          </span>
          {$localize` to `}
          <span class="mr-2 md:mr-3 relative inline-block">
            {$localize`backend,`}
            <PartialUnderline />
          </span>
          <span class="mr-2 md:mr-3 relative inline-block">
            {$localize`DevOps,`}
            <PartialUnderline />
          </span>
          <span class="mr-2 md:mr-3 relative inline-block">{$localize`and`}</span>
          <span class="mr-2 md:mr-3 relative inline-block">
            {$localize`mobile apps`}
            <PartialUnderline />
          </span>
        </h2>
        <h3 class="text-center text-md md:text-lg lg:text-xl text-white z-10 mb-14">
          {$localize`- I deliver effective solutions and optimize performance`}
        </h3>
      </div>
      <div class="max-w-lg m-4 flex flex-col items-center">
        <button
          onClick$={() => scrollToAbout()}
          class={`relative w-auto px-7 py-3 text-white font-bold uppercase p-2 rounded-lg z-10 bg-blue-300 bg-opacity-80 hover:bg-opacity-100 transition-all  duration-1000 ${
            hasLoaded.value === true ? "opacity-80" : "opacity-0"
          }  ${hasLoaded.value === true ? "top-0" : "top-3"}`}
        >
          {$localize`Read more`}
        </button>
      </div>
    </section>
  );
});
