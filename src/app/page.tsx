import About from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Knowledge from "@/components/home/knowledge";
import { Portfolio } from "@/components/home/portfolio";

export default function Home() {
  return (
    <main className="main-container">
      <Hero />
      <About />
      <Portfolio />
      {/* <Knowledge /> */}
      <Contact />
    </main>
  );
}
