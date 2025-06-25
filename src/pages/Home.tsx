import { useGSAP } from '@gsap/react';
import { CornerLeftDown } from 'lucide-react';
import { useEffect, useRef, useState, lazy } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

const Loader = lazy(() => import('../components/Loader'));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const typedRef = useRef<HTMLSpanElement>(null);
 

  // Register SplitText plugin
  gsap.registerPlugin(SplitText);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter animation
  useGSAP(
    () => {
      if (!isLoading && typedRef.current) {
        // Create SplitText instance
        const split = new SplitText(typedRef.current, {
          type: 'chars',
          charsClass: 'split-char',
        });

        
        gsap.set(split.chars, { opacity: 0 });

        
        gsap.to(split.chars, {
          opacity: 1,
          duration: .75,
          stagger: 0.1, // Adjust for typing speed
          delay:2,
          ease: 'none',
          
        });
      }
    },
    { dependencies: [isLoading] }
  );

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <main className="h-screen w-screen bg-white text-white overflow-hidden">
          <section className="flex mt-16 flex-col px-16">
            <div className="w-full flex justify-between">
              <span className="font-bold primary-color w-[70%] headings-regular text-[12vw] items-start">
                Creative
              </span>
              <span className="w-[30%] flex items-start justify-between lg:mt-8 gap-4 h-16 text-right pr-8 text-sm font-mono text-gray-600">
                <span className="flex flex-col text-start">
                  <span>Currently Available FOR</span>
                  <span>Freelance Worldwide</span>
                </span>
                <span className="flex flex-col text-start">
                  <span>My local Time</span>
                  <span>23:05 GMT (+5:30)</span>
                </span>
              </span>
            </div>

            <div className="w-full flex items-center leading-[0.7] gap-4 lg:gap-8">
              <div className="flex items-center justify-between gap-4 w-full">
                <span className="bg-gray-200 rounded-full p-2">
                  <CornerLeftDown className="w-8 h-8 font-light primary-color " />
                </span>
                <span className="flex items-center">
                  {!isLoading && (
                  <span ref={typedRef} className="text-nowrap text-[6.5vw] font-bold text-green-800 cursive-normal-text">
                    Software
                  </span>
                  )}
                  
                </span>
              </div>
              <div className="flex items-center justify-end w-full">
                <span className="text-[10vw] font-bold primary-color text-start headings-regular">
                  Developer
                </span>
              </div>
            </div>
          </section>


          <section className="p-8 lg:mt-40 border border-black">
            <div className='flex flex-col md:flex-row w-full px-16 items-center justify-center gap-4'>
              <div className='w-1/2 p-8 border border-black flex items-center justify-center text-black'>I am Abhishek Jha, I
create unconventional
yet functional &
visually pleasing
interfaces for the
mobile and web.</div>
              <div className='w-1/2 p-8 border border-black flex items-center justify-center text-black'>3d robot</div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Home;