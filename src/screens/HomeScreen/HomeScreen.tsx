import { About } from "@/components/about/AboutSection";
import Footer from "@/components/footer/Footer";
import { Community } from "@/components/community/Community";
import { Hero } from "../../components/hero/Hero";
import { WaitListSubscribe } from "@/components/mailChimpSubscribe/WaitListSubscribe";
import Head from "next/head";

export function HomeScreen() {
  return (
    <>
      <Head>
        <title>Tanzu apprenticeship</title>
      </Head>
      <Hero />
      <About />
      <Community />
      <WaitListSubscribe />
      <Footer />
    </>
  );
}
