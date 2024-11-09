import { component$ } from "@builder.io/qwik";
import { IconGithub } from "~/components/icons/github";
import { IconLinkedin } from "~/components/icons/linkedin";
import { IconContact } from "~/components/icons/contact";

export default component$(() => {
  return (
    <footer>
      <div class="relative">
        <svg
          width="100%"
          height="100"
          viewBox="0 0 1319 330"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100.5C0 100.5 341 263.502 629.5 100.501C918 -62.5005 1319 23.0004 1319 23.0004V330H0V100.5Z"
            fill="#60A5FA"
          />
        </svg>
        <svg
          class="absolute w-full"
          style={{ bottom: "-1px" }}
          width="100%"
          height="50"
          viewBox="0 0 1319 190"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C0 0 227.5 218.518 651 90.5641C1074.5 -37.3894 1319 189.152 1319 189.152H0V0Z"
            fill="#262626"
          />
        </svg>
      </div>

      <div
        class="text-white flex flex-col items-center pt-28"
        style={{ background: "#262626" }}
      >
        <ul class="text-white flex gap-10">
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
        </ul>
        <label class="mt-28 mb-8 text-sm">
          © {new Date().getFullYear()} Olof Sandell
        </label>
      </div>
    </footer>
  );
});
