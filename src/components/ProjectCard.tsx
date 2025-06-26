import gsap from 'gsap';
import { useRef, useEffect } from 'react';

type Props = {
  title: string;
  image: string;
  category: string;
  liveLink: string;
  
  hoverBg: string;
  onHover: (color: string) => void;
  onLeave: () => void;
  
};

const ProjectCard = ({
  title,
  image,
  category,
  liveLink,
  
  hoverBg,
  onHover,
  onLeave,
  
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = image;
  }, [image]);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(imgRef.current, {
        filter: 'grayscale(100%)',
        duration: 0.3,
        ease: 'power2.out',
      });
      onHover(hoverBg);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(imgRef.current, {
        filter: 'grayscale(0%)',
        duration: 0.3,
        ease: 'power2.out',
      });
      onLeave();
    }
  };

  return (
 <a
  href={liveLink}
  target="_blank"
  rel="noreferrer"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className="block w-full h-full" // outermost container
>
  <div ref={cardRef} className="relative group w-full h-full shadow-lg bg-white rounded-4xl overflow-hidden">
    <img
      ref={imgRef}
      src={image}
      alt={title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 text-white flex flex-col items-start justify-end p-4 transition-opacity duration-300">
      <span className="text-xs uppercase tracking-wider">{category}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </div>
</a>
  );
};

export default ProjectCard;