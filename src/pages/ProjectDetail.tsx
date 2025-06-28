import { NavLink, useParams } from "react-router-dom";
import { projects } from "../components/projectsection/projectData";
import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowUpRight, Github } from "lucide-react";

const ProjectDetail = () => {
  const { name } = useParams();
  const project = projects.find(p => p.name === name);
  const { setIsDarkBackground } = useTheme();

  // ProjectDetail page has white background, so text should be dark


    useEffect(() => {
    
      // Check if mobile (dark background) or desktop (light background)
      const checkBackground = () => {
        const isMobile = window.innerWidth < 768;
        setIsDarkBackground(isMobile);
      };
      
      checkBackground();
      window.addEventListener('resize', checkBackground);
      return () => window.removeEventListener('resize', checkBackground);
    }
  , [ setIsDarkBackground]);

  if (!project) {
    return <div className="p-8">Project not found</div>;
  }

  return (
        <main className='w-full md:bg-white bg-black  pt-10 md:mt-16 lg:mt-24 md:pt-0 '>
            <div className='flex px-4 md:px-8 lg:px-16 xl:px-32 flex-col-reverse items-start justify-center'>
            <img src={project.image} className='w-full min-h-[30vh] md:min-h-[40vh] rounded-md object-cover' alt="Project Image" />

            <div className='mt-3 md:mt-4 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-3 md:p-4'>
                <div className='flex flex-col w-full md:max-w-[70%] items-start justify-start h-full'>
                    <h1 className='text-2xl md:text-4xl headings-regular capitalize leading-tight text-white md:text-black'>{project.name}</h1>
                    <p className='text-base text-white md:text-black md:text-xl w-full content-text mt-1 md:mt-2'>{project.desc}</p>
                </div>
                <div className="flex items-center justify-start md:justify-between gap-3 md:gap-4 w-full md:w-auto">
                    <NavLink to={project.liveLink} className="group cursor-pointer text-green-800 hover:text-white hover:bg-green-800 border border-green-600 bg-transparent px-3 md:px-4 py-2 rounded-md flex items-center gap-2 text-sm md:text-base">
                        View Live
                        <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white hidden group-hover:block" />
                    </NavLink>
                    <NavLink to={project.githubLink} title="View Source Code" className="cursor-pointer hover:scale-110 rounded-md"><Github className="w-6 h-6 md:w-8 md:h-8"/></NavLink>
                </div>
            </div>
            </div>

            <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-32 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="col-span-1 hidden md:block lg:sticky lg:top-4 h-fit">
                    <div className="box ring-1 ring-green-700 p-4 md:p-6 lg:p-8 rounded-2xl grid grid-cols-2 justify-center items-center border border-green-800 gap-3 md:gap-4">
                        <div className="flex flex-col col-span-1">
                            <span className="text-sm md:text-base text-gray-700 font-semibold">Client</span>
                            <span className="text-base md:text-lg text-gray-950">khush ramnani</span>
                        </div>
                        <div className="flex flex-col col-span-1">
                            <span className="text-sm md:text-base text-gray-700 font-semibold">Year</span>
                            <span className="text-base md:text-lg text-gray-950">2023</span>
                        </div>
                        <div className="flex flex-col col-span-2">
                            <span className="text-sm md:text-base text-gray-700 font-semibold">Role</span>
                            <span className="text-base md:text-lg text-gray-950">Full Stack Developer</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 md:bg-white bg-black lg:col-span-2 p-3 md:p-4 gap-4   rounded-lg">
                    <div className="flex flex-col items-start justify-start gap-3 md:gap-4">
                        <span className="text-xl md:text-2xl lg:text-4xl headings-regular text-white md:text-gray-700">About</span>
                        <p className="text-base md:text-gray-900 text-white md:text-lg content-text leading-relaxed">{project.about}</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3 md:gap-4 mt-4 md:mt-6">
                        <span className="text-xl md:text-2xl lg:text-4xl headings-regular text-white md:text-gray-700">Challenges</span>
                        <p className="text-base md:text-lg content-text text-white md:text-gray-900 leading-relaxed">{project.challenges}</p>
                    </div>
                </div>
            </div>

            <div className="images-grid px-4 md:px-8 lg:px-16 xl:px-32 w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                {project.otherimages.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Project Image ${index + 1}`} 
                        className={`w-full min-h-[30vh] md:min-h-[50vh] rounded-md object-cover ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`} 
                    />
                ))}
            </div>

            <div className="more-projects px-4  md:px-8 lg:px-16 xl:px-32 bg-white  w-full pt-10 mt-12 md:mt-16 mb-8">
                <h2 className="text-3xl  md:text-4xl headings-regular mb-6 md:mb-8">More Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {projects
                        .filter(p => p.name !== project.name)
                        .slice(0, 4) // Limit to 4 projects for better mobile experience
                        .map((proj, index) => (
                            <div 
                                key={index} 
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => window.location.href = `/projects/${proj.name}`}
                            >
                                <img 
                                    src={proj.image} 
                                    alt={proj.name}
                                    className="w-full h-[30vh] md:h-[50vh] object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl headings-regular capitalize mb-2">{proj.name}</h3>
                                    <p className="text-sm md:text-base content-text text-gray-600 leading-relaxed">{proj.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
  );
};

export default ProjectDetail;
