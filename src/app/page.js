"use client";
import Hero from "@/components/Hero";
import Description from "@/components/Description"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex flex-col gap-5 ">
      <Hero />
      <Description />
    </main>
  );
}
