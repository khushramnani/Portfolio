import React from 'react'
import { useNavigate } from 'react-router-dom';

interface ProjectDetailCardProps {
    prop: {
        image: string;
        name: string;
        desc: string;
    };
}

const ProjectDetailCard = ({ prop }: ProjectDetailCardProps) => {
      const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${prop.name}`);
  };
    return (
        <div className=' w-full h-screen  px-8 bg-white '>
            <div className='project-card flex flex-col items-start justify-center' onClick={handleClick}>
            <img src={prop.image} className='border border-black w-full min-h-[50vh] rounded-md' alt="Project Image" />
            
            <div className='mt-4 border max-w-[70%] border-blue-500 p-4'>
                <div className='flex flex-col items-start justify-start h-full'>
                    <h1 className='text-4xl headings-regular capitalize'>{prop.name}</h1>
                    <p className='text-xl w-full content-text'>{prop.desc}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProjectDetailCard
