import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function index() {
  const phrases = [
    "Los Flamencos National Reserve",
    "is a nature reserve located",
    "in the commune of San Pedro de Atacama",
    "The reserve covers a total area",
    "of 740 square kilometres (290 sq mi)",
  ];

  return (
    <div className="description relative z-[1] text-[3vw] text-white uppercase mt-[30vw] [&>p]:m-0 [&>p]:relative ml-[10vw]">
      {phrases.map((phrase, index) => {
        return (
          <AnimatedText key={index} className="m-0">
            {phrase}
          </AnimatedText>
        );
      })}
    </div>
  );
}

const AnimatedText = ({ children }) => {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
    });
    timeline.fromTo(text.current, { left: "-200px", opacity: 0 }, {left: "0", opacity: 1});
  }, []);
  return <p ref={text}>{children}</p>;
};
