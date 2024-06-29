import Image from "next/image";
import gsap from "gsap";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Salar de Atacama",
    src: "salar_de_atacama.jpg",
  },
  {
    title: "Valle de la luna",
    src: "valle_de_la_muerte.jpeg",
  },
  {
    title: "Miscanti Lake",
    src: "miscani_lake.jpeg",
  },
  {
    title: "Miniques Lagoons",
    src: "miniques_lagoon.jpg",
  },
];

export default function index() {
  const [selectedProject, setSelectedProject] = useState(0);
  return (
    <div className="projects relative text-white mt-[25vh] p-[10%]">
      <div className="projectsDescription flex h-[700px] justify-between gap-[5%]">
        <div className="imageContainer relative h-full w-[40%]">
          <Image
          className="object-cover"
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="image"
          />
        </div>
        <div className="column flex h-full w-[20%] text-[1.6vw]">
          <p>
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and tola
            amaia.
          </p>
        </div>
        <div className="column flex h-full w-[20%] items-end text-[1vw]">
          <p>
            Some, like the southern viscacha, vicuña and Darwins rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable.
          </p>
        </div>
      </div>
      <div className="projectList flex flex-col mt-[20px] relative">
        {
            projects.map((project, index) => {
                return (
                    <div key={index} onMouseOver={() => {setSelectedProject(index)}} className="projectEl w-full text-white uppercase text-[3vw] border-t-[1px] border-white last:border-b-[1px] flex justify-end">
                        <h2 className="m-0 mt-[40px] cursor-default">
                            {project.title}
                        </h2>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}
