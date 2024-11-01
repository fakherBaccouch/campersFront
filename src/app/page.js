import Image from "next/image";
import Hero from "@/components/hero";
import Trip from "@/components/bestTrips";
export default function Home() {
  return (
    <div className="border">
    <Hero />
    <Trip/>
    </div>
  );
}
