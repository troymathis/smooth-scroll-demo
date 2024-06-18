import Image from "next/image";

export default function Index() {
  return (
    <div className="hero ">
      <div className="backgroundImage absolute h-[140vh] w-full top-0 brightness-50">
        <Image
        className="object-cover"
          src="/images/background.jpeg"
          fill={true}
          alt="background image"
        />
      </div>
      <div className="introContainer mt-[35vh] flex items-center justify-center">
        <div className="introImage absolute w-[350px] h-[475px] brightness-75">
          <Image
            src="/images/intro.png"
            fill={true}
            alt="intro image"
          />
        </div>
        <h1 className="z-[3] text-white text-[7vw] uppercase font-extrabold">Smooth Scroll</h1>
      </div>
    </div>
  );
}
