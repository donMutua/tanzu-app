import { About } from "@/components/about/AboutSection";
import Footer from "@/components/footer/Footer";
import { Community } from "@/components/community/Community";
import { Hero } from "../../components/hero/Hero";

export function HomeScreen() {
  return (
    <>
      <Hero />
      <About />
      <Community />
      <Footer />
    </>
  );
}
