import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor'; // Import the new CustomCursor component

type Props = {
  title: string;
  image: string;
  images: string[]; // Add array of images for SmallCard
  category: string;
  liveLink?: string;
  hoverBg: string;
  name: string; 
  onHover: (color: string) => void;
  onLeave: () => void;
};

const ProjectCard = ({
  title,
  image,
  images,
  category,
  liveLink,
  hoverBg,
  onHover,
  onLeave,
  name
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 }); // Start off-screen
  const navigate = useNavigate();
  const isDesktop = window.innerWidth >= 1024;
  // Preload main image
  useEffect(() => {
    const img = new Image();
    img.src = image;
  }, [image]);

  // Handle mouse movement to track cursor position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop || !isHovered) return;
  setCursorPos({ x: e.clientX, y: e.clientY });
    // if (isHovered && window.innerWidth >= 1024) {
    //   setCursorPos({ 
    //     x: e.clientX, 
    //     y: e.clientY 
    //   });
    // }
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    setIsHovered(true);
    
    setCursorPos({ 
      x: e.clientX, 
      y: e.clientY 
      });
    
    if (cardRef.current) {
      gsap.to(imgRef.current, {
        filter: window.innerWidth >= 1024 ? 'grayscale(100%) brightness(0.5)' : 'grayscale(0%)', // Only darken on desktop
        duration: 0.3,
        ease: 'power2.out',
        opacity: 1, 
        zIndex: 100,
        transition: 'opacity 0.2s ease, filter 0.2s ease',
      });
      // Only call onHover on desktop to prevent background color changes on mobile
      if (window.innerWidth >= 1024) {
        onHover(hoverBg);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setIsHovered(false);
    // Move cursor off-screen when leaving
    setCursorPos({ x: -1000, y: -1000 });
    
    if (cardRef.current) {
      gsap.to(imgRef.current, {
        filter: 'grayscale(0%)',
        duration: 0.3,
        ease: 'power2.out',
      });
      // Only call onLeave on desktop
      if (window.innerWidth >= 1024) {
        onLeave();
      }
    }
  };

  const onClick=()=>{
    if (!liveLink) {
      return; 
    }
   navigate(`/projects/${name}`);
  }

  return (
    <>
      <main
        // to={'https://' + liveLink || ''}
        // target="_blank"
        // rel="noreferrer"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="w-full  h-full relative "
      >
        <div
          ref={cardRef}
          className="relative group w-full h-full shadow-lg bg-white rounded-4xl md:rounded-4xl overflow-visible pointer-events-none"
        >
          <img
            ref={imgRef}
            src={image}
            alt={title}
            className="w-full rounded-4xl h-full object-cover"
            loading="lazy"
          />
          <div className="absolute gap-2 inset-0 flex flex-col items-start justify-end p-4">
            <div className={`bg-white  ml-2 border border-black p-2 min-w-[15%] max-w-[30%] rounded-full hidden md:flex px-4 items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-xs uppercase primary-color tracking-wider">{category}</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="bg-white border px-2 p-2 md:p-4 border-gray-700 rounded-full flex  md:px-4 items-center justify-center">
                <h3 className="text-sm md:text-lg primary-color content-text font-semibold">{title}</h3>
              </div>
              <div className={`border  border-black rounded-full p-3 bg-white ${isDesktop && isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <ArrowUpRight className="w-4 h-4  md:w-8 md:h-8 primary-color" />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Only show CustomCursor on desktop screens */}
      {isHovered && isDesktop && <CustomCursor images={images} liveLink={liveLink} x={cursorPos.x} y={cursorPos.y} />}
    </>
  );
};

export default ProjectCard;