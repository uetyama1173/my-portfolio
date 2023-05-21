import Head from "next/head";

import { AboutSection } from "./components/about/AboutSection";
import { CareerSection } from "./components/career/CareerSection";
import { AsideWrapper } from "./components/shared/AsideWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>sho_portfolio</title>
      </Head>
      <main className="container mx-auto mb-16 bg-background lg:max-w-5xl">
        <AboutSection />
        <AsideWrapper>
          <CareerSection />
        </AsideWrapper>
      </main>
    </>
  );
}
