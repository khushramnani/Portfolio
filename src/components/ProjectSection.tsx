import ProjectCard from '../components/ProjectCard';
import { MoveDownLeft } from 'lucide-react';
import ProjectPrev1 from '../assets/AnonovaPreview.png';

const ProjectSection = ({ onHover, onLeave }: { onHover: (color: string) => void; onLeave: () => void }) => {
  // Example array of images for each project
  const projectImages = {
    zuno: [
      ProjectPrev1,
      'https://images.unsplash.com/photo-1516321318423-ffd391d2a921',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    ],
    groovr: [
      'https://images.unsplash.com/photo-1511671786161-6e234e20e504',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      'https://images.unsplash.com/photo-1516321318423-ffd391d2a921',
    ],
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-start p-4 md:p-12 pb-0 md:mt-8 w-full">
        <div className="flex flex-row justify-between w-full gap-4">
          <div className="flex items-center justify-center w-full">
            <h2 className="text-3xl md:text-4xl lg:text-8xl headings-regular font-bold text-center text-gray-200 md:text-black">
              Things I've <span className="cursive-normal-text text-green-500">Build</span>
            </h2>
          </div>
          <div className="flex items-start justify-end">
            <MoveDownLeft className="w-8 md:w-32 h-8 md:h-32 text-gray-200 md:text-gray-500 text-base font-light" />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full px-4 md:px-8 py-8 mt-8 md:mt-16">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-around gap-8 mb-8 md:mb-16">
          <div className="h-[50vh] md:h-[70vh] lg:h-[90vh] w-full lg:w-[50%]">
            <ProjectCard
              title="Zuno – AI Web App Builder"
              image={ProjectPrev1}
              images={projectImages.zuno}
              category="AI, SaaS"
              liveLink="anonova-pi.vercel.app"
              hoverBg="#e0f7fa"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
          <div className="h-[50vh] md:h-[60vh] lg:h-[50vh] w-full lg:w-[40%] lg:mt-40">
            <ProjectCard
              title="Groovr – Music Streaming App"
              image="https://images.unsplash.com/photo-1511671786161-6e234e20e504"
              images={projectImages.groovr}
              category="Music, Frontend"
              liveLink="https://groovr.vercel.app"
              hoverBg="#f3e8ff"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
        </div>

        {/* Second Row - Center Project */}
        <div className="flex flex-col md:flex-row mt-8 md:mt-16 w-full items-center justify-center mb-8 md:mb-16">
          <div className="h-[50vh] md:h-[70vh] lg:h-[80vh] w-full lg:w-[60%]">
            <ProjectCard
              title="Zuno – AI Web App Builder"
              image="https://images.unsplash.com/photo-1516321318423-ffd391d2a921"
              images={projectImages.zuno}
              category="AI, SaaS"
              hoverBg="#e0f7fa"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-around gap-8">
          <div className="h-[50vh] md:h-[60vh] lg:h-[60vh] w-full lg:w-[40%] lg:mt-96 order-2 lg:order-1">
            <ProjectCard
              title="Groovr – Music Streaming App"
              image="https://images.unsplash.com/photo-1511671786161-6e234e20e504"
              images={projectImages.groovr}
              category="Music, Frontend"
              liveLink="https://groovr.vercel.app"
              hoverBg="#f3e8ff"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>

          <div className="h-[50vh] md:h-[70vh] lg:h-[80vh] w-full lg:w-[50%] order-1 lg:order-2">
            <ProjectCard
              title="Zuno – AI Web App Builder"
              image={ProjectPrev1}
              images={projectImages.zuno}
              category="AI, SaaS"
              liveLink="anonova-pi.vercel.app"
              hoverBg="#e0f7fa"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;