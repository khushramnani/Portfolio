import React, { useEffect, useRef } from "react";
import { projects } from "../components/projectsection/projectData";
import ProjectDetailCard from "../components/projectsection/ProjectDetailCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".project-card");

    sections.forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 100vh",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-white w-full h-full">
      <section className="px-4 md:px-16 lg:px-32 mt-16">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-4xl lg:text-7xl font-bold">
            My <span className="text-green-500 merienda-cursive">Best</span> Creations
          </h1>
          <p className="text-xl lg:text-3xl max-w-4xl content-text">
            Designing and Developing Robust and Stylish Web Applications for a Decade and Counting
          </p>
        </div>
      </section>

      <section ref={containerRef} className="px-4 md:px-16 lg:px-32 py-20">
        {projects.map((project) => (
          <ProjectDetailCard key={project.id} prop={project} />
        ))}
        <div className="h-[50vh]"></div>
      </section>
    </main>
  );
};

export default Project;
