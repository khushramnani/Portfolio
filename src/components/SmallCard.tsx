import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

type SmallCardProps = {
  images: string[];
  x: number;
  y: number;
};

const SmallCard = ({ images, x, y }: SmallCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Cycle through images every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  // Position SmallCard near cursor
  useEffect(() => {
    if (cardRef.current) {
      // Offset to position the card slightly below and to the right of cursor
      const offsetX = 10;
      const offsetY = 10; // Positive to position below cursor

      const finalX = x + offsetX;
      const finalY = y + offsetY;

      gsap.to(cardRef.current, {
        left: finalX,
        top: finalY,
        duration: 0.1,
        ease: 'power2.out',
      });
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
    <div
      ref={cardRef}
      className="fixed z-[100] w-[15vw] h-[30vh] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden pointer-events-none"
    >
    <span className='w-full bg-gray-400 flex items-start justify-start text-start px-1'>ooo</span>
      <img
        src={images[currentImageIndex]}
        alt="Preview"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default SmallCard;