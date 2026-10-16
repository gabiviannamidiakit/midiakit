import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Numbers } from "@/components/sections/Numbers";
import { Audience } from "@/components/sections/Audience";
import { Curation } from "@/components/sections/Curation";
import { Brands } from "@/components/sections/Brands";
import { Feedbacks } from "@/components/sections/Feedbacks";
import { Formats } from "@/components/sections/Formats";
import { Contact } from "@/components/sections/Contact";

export default function MediaKitPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Numbers />
        <Audience />
        <Curation />
        <Brands />
        <Feedbacks />
        <Formats />
        <Contact />
      </main>
    </>
  );
}
