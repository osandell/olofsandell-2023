import { component$ } from "@builder.io/qwik";
import ImgProfile from "~/media/profile.jpg?jsx";

export default component$(() => {
  return (
    <section id="about" class="my-14 md:my-28 mx-4 flex flex-col items-center">
      <div class="text-center md:max-w-prose">
        <h2 class="font-bold text-center  text-2xl  mb-8  ">
          Genuint teknikintresserad
        </h2>
        <p class="mb-4  ">
          Mitt teknikintresse började tidigt i livet när jag fick min första
          Amiga A1200 som 10-åring. Sedan dess har min kärlek för teknik bara
          vuxit, med ett särskilt fokus på kodning och webbutveckling. Under
          årens lopp har det blivit allt från spel och drivrutiner i C++ till
          mobilappar i Java, och alla möjliga typer av script för automatisering
          i bash, python mm. På senare år har jag fokuserat på webbutveckling,
          framförallt med React + TypeScript och Azure + AWS.
        </p>
        <p class="mb-4  ">
          Vad jag har märkt med tiden är att det inte bara handlar om att koda.
          Det handlar om att hitta lösningar på problem, optimera arbetsflöden
          och alltid sträva efter att förbättra prestanda.
        </p>
        <p class="mb-12  ">
          Här är tre områden där jag särskilt gillar att bidra:
        </p>
        <h3 class="font-bold   mb-4  ">Lösa svårknäckta problem och buggar</h3>
        <p class="mb-12  ">
          Med min bakgrund av att använda olika programmeringsspråk och system,
          har jag en djup förståelse för teknikens kärna. Det gör det möjligt
          för mig att snabbt analysera, förstå och lösa komplexa problem som kan
          uppstå under utvecklingsprocessen. Min passion för kodning och min
          ihärdighet hjälper mig att konsekvent lösa buggar och tekniska
          utmaningar.
        </p>
        <h3 class="font-bold  mb-4  ">
          Skapa smartare arbetsflöden som sparar tid och pengar
        </h3>
        <p class="mb-12  ">
          Effektivitet och innovation är två av mina styrkor när det kommer till
          webbutveckling. Genom att ständigt utforska nya tekniker och verktyg,
          hittar jag nya sätt att automatisera och förenkla arbetsflöden. Detta
          kan innebära allt från att optimera existerande kod till att
          implementera nya processer som förbättrar samarbete inom teamet. Genom
          det bidrar jag till att minska utvecklingstiden och därmed också
          kostnaden för varje projekt.
        </p>
        <h3 class="font-bold mb-4">
          Optimera applikationers storlek och hastighet
        </h3>
        <p class="mb-4  ">
          Med en alltmer mobil värld är snabbhet och optimering av storlek
          nyckeln till en lyckad webbapplikation. Genom att skriva ren, kompakt
          och effektiv kod, samt genom att använda moderna tekniker och verktyg,
          ser jag till att de applikationer jag bygger är både snabba och lätta.
          Det ger slutanvändaren en bättre upplevelse och påverkar direkt
          applikationens framgång.
        </p>
        <p class="mb-28  ">
          Som ett exempel på att få mycket prestanda för pengarna, har jag byggt
          den här sidan med hjälp av Qwik, ett nytt ramverk som är betydligt
          snabbare än tex React tack vare nya eleganta lösningar på
          SSR/CSR-dilemmat. Jag har sen deployat den på en egenadministrerad VPS
          vilket ger mig full kontroll och mimimala kostnader.
        </p>
        <h2 class="font-bold text-center  text-2xl  mb-8  ">Kontakt</h2>
        <p class="mb-4">
          {`Du kan lättast nå mig via e-post på `}
          <a href="mailto:olof.sandell@protonmail.com" class="text-blue-800">
            olof.sandell@protonmail.com
          </a>
          {` eller genom att skicka ett meddelande till mig på `}
          <a
            href="https://www.linkedin.com/in/olof-sandell/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-800"
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
