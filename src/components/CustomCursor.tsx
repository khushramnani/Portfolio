import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

type CustomCursorProps = {
  images: string[];
  liveLink?: string;
  x: number;
  y: number;
};

const CustomCursor = ({ images, liveLink, x, y }: CustomCursorProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Cycle through images every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  // Position all elements relative to cursor
  useEffect(() => {
    if (cursorRef.current && titleRef.current && cardRef.current) {
      // Only position if cursor is visible (not at -1000, -1000)
      if (x > -500 && y > -500) {
        // Cursor circle at exact mouse position
        gsap.to(cursorRef.current, {
          left: x,
          top: y,
          duration: 0.1,
          ease: 'power2.out',
        });

        // Title bar to the right of cursor
        gsap.to(titleRef.current, {
          left: x + 30, // 30px to the right of cursor
          top: y - 15, // Slightly above cursor center
          duration: 0.1,
          ease: 'power2.out',
        });

        // SmallCard below the cursor
        gsap.to(cardRef.current, {
          left: x + 10,
          top: y + 30, // 30px below cursor
          duration: 0.1,
          ease: 'power2.out',
        });
      }
    }
  }, [x, y]);

  // Preload images to avoid flickering
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <>
      {/* Only render when cursor is in valid position */}
      {x > -500 && y > -500 && (
        <>
          {/* Cursor Circle */}
          <div
            ref={cursorRef}
            className="fixed z-[110] w-8 h-8 border border-white bg-transparent rounded-full pointer-events-none transform -translate-x-2 -translate-y-2"
          />
          
          {/* Title Bar */}
          <div
            ref={titleRef}
            className="fixed z-[109] bg-white border border-gray-300 rounded-full px-4 py-2 shadow-lg  pointer-events-none whitespace-nowrap"
          >
            <span className="text-sm font-medium text-gray-800">{liveLink ? liveLink : 'Dropping Soon'}</span>
          </div>

          {/* SmallCard */}
          <div
            ref={cardRef}
            className="fixed mt-4 z-[108] w-[20vw] rounded-md max-h-[50vh] shadow-xl ml-4  overflow-hidden pointer-events-none"
          >
            <span className='w-full -mt-2 bg-gray-200/10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40  flex items-start justify-start text-start px-1 text-gray-300'>ooo</span>
            <img
              src={images[currentImageIndex]}
              alt="Preview"
              className="w-full  h-full object-cover"
              loading="lazy"
            />
          </div>
        </>
      )}
    </>
  );
};

export default CustomCursor;
