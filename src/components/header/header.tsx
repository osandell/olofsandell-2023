import { component$, useSignal } from "@builder.io/qwik";
import { IconGithub } from "~/components/icons/github";
import { IconLinkedin } from "~/components/icons/linkedin";
import { IconContact } from "~/components/icons/contact";
import type { RouteLocation } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";

const LocaleLink = ({ location }: { location: RouteLocation }) => {
  const isSwedish = location.url.pathname === "/sv/";

  return isSwedish ? (
    <a href={`/en${location.url.pathname.slice(3)}${location.url.search}`}>
      <div class="flex flex-row items-center leading-none pl-1 h-full">
        <div class="border-r border-white pr-1 text-gray-400">en</div>
        <div class="pl-1 ">sv</div>
      </div>
    </a>
  ) : (
    <a href={`/sv${location.url.pathname.slice(3)}${location.url.search}`}>
      <div class="flex flex-row items-center leading-none pl-1 h-full">
        <div class="border-r border-white pr-1">en</div>
        <div class="pl-1 text-gray-400">sv</div>
      </div>
    </a>
  );
};

export default component$(() => {
  const hasScrolled = useSignal(false);
  const location = useLocation();

  return (
    <header
      class={`${
        hasScrolled.value ? "bg-opacity-100" : "bg-opacity-60"
      }   h-20 items-center flex fixed top-0 left-0 right-0  z-50`}
      style={{ background: hasScrolled.value ? "#262626" : "#262626d0" }}
      window:onscroll$={() => {
        hasScrolled.value = window.scrollY > 10;
      }}
    >
      <div class="max-w-screen-xl mx-auto flex justify-between px-6 w-full">
        <h1
          style={{ letterSpacing: "5px" }}
          class="text-sm sm:text-lg md:text-md lg:text-lg  uppercase  text-white mr-4"
        >
          Olof Sandell
        </h1>

        <nav class="flex items-center">
          <ul class="text-white flex gap-3">
            <li>
              <a
                href="https://www.linkedin.com/in/olof-sandell/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/osandell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGithub />
              </a>
            </li>
            <li>
              <a href="mailto:olof.sandell@protonmail.com">
                <IconContact />
              </a>
            </li>
            <LocaleLink location={location} />
          </ul>
        </nav>
      </div>
    </header>
  );
});
