import { component$ } from "@builder.io/qwik";
import ImgProfile from "~/media/profile.jpg?jsx";

export default component$(() => {
  return (
    <section id="about" class="my-14 md:my-28 mx-4 flex flex-col items-center">
      <div class="text-center md:max-w-prose lg:max-w-screen-md">
        <h2 class="font-bold text-center text-2xl mb-8">
          {$localize`A genuine passion for technology`}
        </h2>
        <p class="mb-4">
          {$localize`My interest in technology began early in life when I got my first computer at the age of 9 — a SpectraVideo 728 with a cassette player. Since then, my love for technology has only grown. Over the years, I've done everything from games and drivers in C++, mobile apps in Java, to all kinds of scripts for automation in bash, python, etc. In recent years I've focused on web development, primarily with React + TypeScript and Azure + AWS.`}
        </p>
        <p class="mb-4">
          {$localize`What I've noticed over time is that the actual typing of code is just a part of the process. It's also about finding solutions to problems, optimizing workflows, and always striving to improve performance.`}
        </p>
        <p class="mb-12 lg:mb-16">
          {$localize`Here are three areas where I particularly enjoy contributing:`}
        </p>
        <h3 class="font-bold mb-4">{$localize`Solving tough problems and bugs`}</h3>
        <p class="mb-12 lg:mb-16">
          {$localize`With my background in using different programming languages and systems, I have a deep understanding of the core of technology. This makes it possible for me to quickly analyze, understand, and solve complex problems that may arise during the development process. My passion for coding and my persistence help me consistently solve bugs and technical challenges.`}
        </p>
        <h3 class="font-bold mb-4">
          {$localize`Creating smarter workflows that save time and money`}
        </h3>
        <p class="mb-12 lg:mb-16">
          {$localize`Efficiency and innovation are two of my strengths when it comes to web development. By constantly exploring new technologies and tools, I find new ways to automate and simplify workflows. This can range from optimizing existing code to implementing new processes that improve collaboration within the team. Through this, I contribute to reducing development time and thus lowering the financial expences.`}
        </p>
        <h3 class="font-bold mb-4">
          {$localize`Optimizing application size and speed`}
        </h3>
        <p class="mb-4">
          {$localize`With an increasingly mobile world, speed and size optimization are key to a successful web application. By writing clean, compact, and efficient code, and by using modern technologies and tools, I ensure that the applications I build are both fast and lightweight. This provides the end user with a better experience and directly affects the success of the application.`}
        </p>
        <p class="mb-28">
          {$localize`As an example of getting a lot of performance for the money, I built this site using Qwik, a new framework that is significantly faster than for example React, thanks to new elegant solutions to the server / client side rendering dilemma. I then deployed it to a self-managed virtual private server, giving me full control at minimal costs.`}
        </p>
        <h2 class="font-bold text-center text-2xl mb-8">{$localize`Contact`}</h2>
        <p class="mb-4">
          {$localize`You can easily reach me via email at `}
          <a
            href="mailto:olof.sandell@protonmail.com"
            class="text-blue-700 underline"
          >
            olof.sandell@protonmail.com
          </a>
          {$localize` or by sending me a message on `}
          <a
            href="https://www.linkedin.com/in/olof-sandell/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-700 underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <ImgProfile alt="profile" class=" w-48 mt-12 " />
    </section>
  );
});
