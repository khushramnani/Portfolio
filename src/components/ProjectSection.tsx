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
      <div className="flex justify-start p-12 pb-0 md:mt-8 w-full border border-black">
        <div className="flex justify-between w-full gap-4">
          <div className="flex items-center justify-center w-full">
            <h2 className="text-4xl lg:text-8xl headings-regular font-bold text-center primary-color">
              Things I've <span className="cursive-normal-text text-green-500">Build</span>
            </h2>
          </div>
          <div className="flex items-start justify-end">
            <MoveDownLeft className="w-32 h-32 secondary-color text-base font-light" />
          </div>
        </div>
      </div>

      <div className="w-full px-8 py-8 mt-16">
        <div className="flex flex-col md:flex-row w-full items-center justify-around gap-8">
          <div className="h-[90vh] w-[50%]">
            <ProjectCard
              title="Zuno – AI Web App Builder"
              image={ProjectPrev1}
              images={projectImages.zuno} // Pass array of images
              category="AI, SaaS"
              liveLink="anonova-pi.vercel.app"
              hoverBg="#e0f7fa"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
          <div className="h-[50vh] w-[40%] lg:mt-40">
            <ProjectCard
              title="Groovr – Music Streaming App"
              image="https://images.unsplash.com/photo-1511671786161-6e234e20e504"
              images={projectImages.groovr} // Pass array of images
              category="Music, Frontend"
              liveLink="https://groovr.vercel.app"
              hoverBg="#f3e8ff"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-16 w-full items-center justify-center">
          <div className="h-[80vh] w-[60%]">
            <ProjectCard
              title="Zuno – AI Web App Builder"
              image="https://images.unsplash.com/photo-1516321318423-ffd391d2a921"
              images={projectImages.zuno} // Pass array of images
              category="AI, SaaS"
            //   liveLink="https://zuno.ai"
              hoverBg="#e0f7fa"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
        </div>

<div className="flex flex-col md:flex-row w-full  items-center justify-around gap-8">
    <div className="h-[60vh] w-[40%] lg:mt-96">
            <ProjectCard
              title="Groovr – Music Streaming App"
              image="https://images.unsplash.com/photo-1511671786161-6e234e20e504"
              images={projectImages.groovr} // Pass array of images
              category="Music, Frontend"
              liveLink="https://groovr.vercel.app"
              hoverBg="#f3e8ff"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>

          <div className="h-[80vh] w-[50%]">
            <ProjectCard
              title="Zuno – AI Web App Builder"
              image={ProjectPrev1}
              images={projectImages.zuno} // Pass array of images
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