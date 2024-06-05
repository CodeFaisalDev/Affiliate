import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="w-full font-mono">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px]">
          <NavBar />

        </div>
      </div>

      <div className="w-full">
        <Hero />
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px]">
          <Products />

        </div>
      </div>
    </main>
  );
}
