import { useParams } from "react-router-dom";
import { projects } from "../components/projectsection/projectData";
import ProjectDetailCard from "../components/projectsection/ProjectDetailCard";

const ProjectDetail = () => {
  const { name } = useParams();
  const project = projects.find(p => p.name === name);

  if (!project) {
    return <div className="p-8">Project not found</div>;
  }

  return (
        <div className=' w-full   md:px-16 lg:px-32 mt-10 px-8 bg-white '>
            <div className='  flex flex-col-reverse  items-start justify-center'>
            <img src={project.image} className='border border-black w-full min-h-[50vh] rounded-md' alt="Project Image" />

            <div className='mt-4 border max-w-[70%] border-blue-500 p-4'>
                <div className='flex flex-col items-start justify-start h-full'>
                    <h1 className='text-4xl headings-regular capitalize'>{project.name}</h1>
                    <p className='text-xl w-full content-text'>{project.desc}</p>
                </div>
            </div>
            </div>

            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="col-span-1 sticky top-0 h-fit">
                    <div className="box p-8 rounded-2xl grid grid-cols-2 justify-center items-center  border border-green-800 gap-4">
                        <div className="flex flex-col col-span-1">
                            <span>Client</span>
                            <span>khush ramnani</span>
                        </div>
                        <div className="flex flex-col col-span-1">
                            <span>Year</span>
                            <span>2023</span>
                        </div>
                        <div className="flex flex-col col-span-2 ">
                            <span>Role</span>
                            <span>Full Stack Developer</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 p-4 bg-gray-100 ">
                    <div className="flex flex-col items-start justify-start gap-4">
                        <span>About</span>
                        <p className="text-lg content-text">{project.about}</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 mt-4">
                        <span>Challenges</span>
                        <p className="text-lg content-text">{project.challenges}</p>
                    </div>
                </div>
            </div>

            <div className="images-grid w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {project.otherimages.map((image, index) => (
                    <img 
                        key={index} 
                        
                        src={image} 
                        alt={`Project Image ${index + 1}`} 
                        className={`w-full min-h-[50vh] rounded-md ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`} 
                    />
                ))}
            </div>

            <div className="more-projects w-full mt-16">
                <h2 className="text-3xl headings-regular mb-8">More Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects
                        .filter(p => p.name !== project.name)
                        .map((proj, index) => (
                            <ProjectDetailCard key={index} prop={proj} />
                        ))
                    }
                </div>
            </div>
        </div>
  );
};

export default ProjectDetail;
