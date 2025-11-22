import { Navbar } from "@/components/Navbar";
import { HeroBranded } from "@/components/HeroBranded";
import { Services } from "@/components/Services";
import { AppsShowcase } from "@/components/AppsShowcase";
import { AIxCrypto } from "@/components/AIxCrypto";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBranded />
        <Services />
        <AppsShowcase />
        <AIxCrypto />
      </main>
    </>
  );
}
