"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex flex-col gap-5">
      <div className=" bg-orange-400 h-screen">yo</div>
      <div className="h-screen bg-orange-400">oy</div>
      <div className="h-screen bg-orange-400">dwq</div>
    </main>
  );
}
