import ProjectCard from '../components/ProjectCard';
// import {projects} from '../projectData';
import { MoveDownLeft } from 'lucide-react';

// ...other imports

const ProjectSection = ({ onHover, onLeave }: { onHover: (color: string) => void; onLeave: () => void; }) => {

    return (
        <>
            <div className='flex  justify-start p-12 pb-0 md:mt-8 w-full border border-black'>
                <div className='flex  justify-between w-full gap-4'>
                    <div className='flex items-center justify-center w-full'>
                        <h2 className="text-4xl lg:text-8xl headings-regular font-bold text-center primary-color ">Things I've <span className='cursive-normal-text text-green-500'>Build</span></h2>

                    </div>
                    <div className='flex items-start justify-end '>
                        <MoveDownLeft className='w-32 h-32 secondary-color text-base font-light ' />
                    </div>
                </div>
            </div>

            <div className=" w-full px-8  py-8 mt-16">
                
                <div className='flex flex-col md:flex-row  w-full items-center justify-around gap-8'>
                    <div className='h-[90vh] w-[50%]'>
                        <ProjectCard
                            title="Zuno – AI Web App Builder"
                            image="https://images.unsplash.com/photo-1516321318423-ffd391d2a921"
                            category="AI, SaaS"
                            liveLink="https://zuno.ai"
                            hoverBg="#e0f7fa"
                            onHover={onHover}
                            onLeave={onLeave}
                        />
                    </div>
                    <div className='h-[50vh] w-[40%]  lg:mt-40'>
                        <ProjectCard 
                            title="Groovr – Music Streaming App"
                            image="https://images.unsplash.com/photo-1511671786161-6e234e20e504"
                            category="Music, Frontend"
                            liveLink="https://groovr.vercel.app"
                            hoverBg="#f3e8ff"
                            onHover={onHover}
                            onLeave={onLeave}
                        />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row mt-16  w-full items-center justify-center '>
                    <div className='h-[80vh] w-[60%]'>
                        <ProjectCard
                            title="Zuno – AI Web App Builder"
                            image="https://images.unsplash.com/photo-1516321318423-ffd391d2a921"
                            category="AI, SaaS"
                            liveLink="https://zuno.ai"
                            hoverBg="#e0f7fa"
                            onHover={onHover}
                            onLeave={onLeave}
                        />
                    </div>
                    
                </div>

                {/* Second row - 2 cards with custom widths (70% and 30%) */}
                {/* <div className='flex w-full gap-8'>
                    <div className='w-[70%] h-[60vh]'>
                        <ProjectCard
                            title="Third Project"
                            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                            category="Web App"
                            liveLink="#"
                            hoverBg="#fff3cd"
                            onHover={onHover}
                            onLeave={onLeave}
                        />
                    </div>
                    
                    <div className='w-[30%] h-[60vh]'>
                        <ProjectCard
                            title="Fourth Project"
                            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                            category="UI/UX"
                            liveLink="#"
                            hoverBg="#f8d7da"
                            onHover={onHover}
                            onLeave={onLeave}
                        />
                    </div>
                </div> */}

                </div>
        </>
    )
}

export default ProjectSection
