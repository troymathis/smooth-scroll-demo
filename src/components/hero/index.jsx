import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Index() {

  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    timeline
      .fromTo(backgroundImage.current, { clipPath: `inset(15%)`}, {clipPath: `inset(0%)`})
      .to(introImage.current,{ height: "200px" });
  }, []);

  return (
    <div className="hero ">
      <div
        className="backgroundImage absolute h-[140vh] w-full top-0 brightness-50"
        ref={backgroundImage}
      >
        <Image
          className="object-cover"
          src="/images/background.jpeg"
          fill={true}
          alt="background image"
        />
      </div>
      <div
        className="introContainer mt-[35vh] flex items-center justify-center"
      >
        <div
          data-scroll
          data-scroll-speed="0.3"
          className="introImage absolute w-[350px] h-[475px] brightness-75"
          ref={introImage}
        >
          <Image src="/images/intro.png" fill={true} alt="intro image" className="object-cover object-top" />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="z-[3] text-white text-[7vw] uppercase font-extrabold"
        >
          Smooth Scroll
        </h1>
      </div>
    </div>
  );
}
