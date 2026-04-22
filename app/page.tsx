import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      <section
        id="gioi-thieu"
        aria-labelledby="gioi-thieu-title"
        className="scroll-mt-20 py-24 md:py-32"
      >
        <About />
      </section>

      <section
        id="du-an"
        aria-labelledby="du-an-title"
        className="scroll-mt-20 py-24 md:py-32"
      >
        <Projects />
      </section>

      <section
        id="lien-he"
        aria-labelledby="lien-he-title"
        className="scroll-mt-20 py-24 md:py-32"
      >
        <Contact />
      </section>
    </>
  );
}
