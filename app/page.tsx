import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Philosophy from "@/components/Philosophy";
import Campus from "@/components/Campus";
import Testimonials from "@/components/Testimonials";
import TourCTA from "@/components/TourCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <Programs />
        <Philosophy />
        <Campus />
        <Testimonials />
        <TourCTA />
      </main>
      <Footer />
    </>
  );
}
