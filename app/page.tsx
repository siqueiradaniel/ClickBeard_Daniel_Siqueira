import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import ServiceList from "@/components/ServiceList";
import Image from "next/image";

export default function Home() {
  return (
    <section className="pb-3">
      <Hero />
      <AboutUs />
      <ServiceList />
    </section>
  );
}
