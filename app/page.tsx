import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealWatcher from "@/components/RevealWatcher";
import OpeningQuote from "@/components/OpeningQuote";
import Hero from "@/components/sections/Hero";
import Meet from "@/components/sections/Meet";
import Journey from "@/components/sections/Journey";
import Vision from "@/components/sections/Vision";
import FeedbackWall from "@/components/sections/FeedbackWall";
import Join from "@/components/sections/Join";
import FinalMessage from "@/components/sections/FinalMessage";
import { getSettings } from "@/lib/settings";

export default async function Home() {
  const settings = await getSettings();

  return (
    <>
      <RevealWatcher />
      <Header />
      <main id="main">
        <OpeningQuote />
        <Hero />
        <Meet />
        <Journey />
        <Vision />
        <FeedbackWall />
        <Join settings={settings} />
        <FinalMessage />
      </main>
      <Footer settings={settings} />
    </>
  );
}
