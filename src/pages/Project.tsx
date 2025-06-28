import { useEffect, useRef } from "react";
import { projects } from "../components/projectsection/projectData";
import ProjectDetailCard from "../components/projectsection/ProjectDetailCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTheme } from "../contexts/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);
  const { setIsDarkBackground } = useTheme();

  // Project page has white background, so text should be dark
  useEffect(() => {
    setIsDarkBackground(false);
  }, [setIsDarkBackground]);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card: any, index: number) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        id: `card-${index}`,
        end: () => {
          // For the last card, end when it's fully stacked (after one viewport height)
          // For other cards, they get unpinned when the next card reaches the top
          return index === cards.length - 1 ? "+=100vh" : "bottom top";
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-white w-full h-full">
      <section className="px-4 md:px-16 mb-8 md:mb:0 lg:px-32 mt-16 md:mt-32">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight">
            My <span className="text-green-500 merienda-cursive">Best</span> Creations
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl max-w-4xl content-text mt-2 md:mt-4">
            Designing and Developing Robust and Stylish Web Applications for a Decade and Counting
          </p>
        </div>
      </section>

      <section ref={containerRef} className=" flex flex-col md:gap-16 md:px-16 md:py-20">
        {projects.map((project) => (
          <ProjectDetailCard key={project.id} prop={project} />
        ))}
        <div className=" h-[0vh] md:h-[50vhvh]"></div>
      </section>
    </main>
  );
};

export default Project;
