import ProjectCard from '../components/ProjectCard';
import { MoveDownLeft } from 'lucide-react';
import {projects} from '../components/projectsection/projectData'
const ProjectSection = ({ onHover, onLeave }: { onHover: (color: string) => void; onLeave: () => void }) => {
  // Example array of images for each project
  const projectImages = {
    anonova: [
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751192138/hero_vdqulr.png",
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190095/signup_bo3wln.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190089/dashboard_dwm6sh.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190093/userlink_yqwxrf.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751192140/No_of_users_in_48_hr_i7uxpp.png'
    ],
    zuno: [
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190008/what_yrlayz.png",
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190000/thinkpad_ir3qdl.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190005/try2_yp11cz.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190003/try1_rw6mdd.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190001/pricingpage_ielont.png',
    ],
    twoeightmedia: [
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254604/Hero_s1xcc6.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254604/what-we-do_md2esk.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254604/services_kmwdji.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254605/CTA_ci9os9.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254605/testimonials_vtkusl.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254603/cta-branding_mm5foi.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254604/footer_eks4ct.png',
    ],
    pagecrafter: [
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190051/main-landing_yvlp00.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190045/HTW_c0vpsc.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190049/circle-landing_mjhjdk.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190047/BuildArea2_y2ujfl.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190054/BuildArea_upukud.png'
    ],
    Habiyo: [
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254708/image1_sil96q.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254707/image3_lz2yig.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254707/image3_lz2yig.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254710/image4_vfrjw4.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254710/image4_vfrjw4.png',
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254711/image5_kqqvht.png'
    ]
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
              title="Anonova"
              name={projects[0].name}
              image={"https://res.cloudinary.com/dql9uwmjx/image/upload/v1751174284/Project_Mokups_htsjvq.png"}
              images={projectImages.anonova}
              category="Web App, AI"
              liveLink="anonova-pi.vercel.app"
              hoverBg="#C1C6D7"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
          <div className="h-[50vh] md:h-[60vh] lg:h-[50vh] w-full lg:w-[40%] lg:mt-40">
            <ProjectCard
              
              title="Habiyo"
              name={projects[3].name}
              image="https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254687/YOUR_DAILY_DOSE_OF_HABIT_n4v5oa.png"
              images={projectImages.Habiyo}
              category="Mobile App"
              liveLink="https://github.com/khushramnani/Habiyo"
              hoverBg="#FF99A8"
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
              name={projects[1].name}
              image={'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751180667/4_yq3tfy.png'}
              images={projectImages.zuno}
              category="AI, SaaS"
              liveLink="anonova-pi.vercel.app"
              hoverBg="#DBCABD"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-around gap-8">
          <div className="h-[50vh] md:h-[60vh] lg:h-[60vh] w-full lg:w-[40%] lg:mt-96 order-2 lg:order-1">
            <ProjectCard
              title="28-Media – Branding & Ads"
              name={projects[4].name}
              image={'https://res.cloudinary.com/dql9uwmjx/image/upload/v1753254631/Project_Mokups_3_u4cyqe.png'}
              images={projectImages.twoeightmedia}
              category="Static Website"
              liveLink="28-media.com"
              // hoverBg="#e0f7fa"
              hoverBg="#FFBC99"
              onHover={onHover}
              onLeave={onLeave}
            />
          </div>

          <div className="h-[50vh] md:h-[70vh] lg:h-[80vh] w-full lg:w-[50%] order-1 lg:order-2">
            
            <ProjectCard
              title="PageCrafter"
              name={projects[2].name}
              image="https://res.cloudinary.com/dql9uwmjx/image/upload/v1751180726/5_gl6mr0.png"
              images={projectImages.pagecrafter}
              category="Website Builder"
              // liveLink=""
              hoverBg="#E5B5B3"
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