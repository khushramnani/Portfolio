import { useGSAP } from '@gsap/react';
import { ArrowDownRight, CornerLeftDown } from 'lucide-react';
import { useEffect, useRef, useState, lazy } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import SplineRobot from '../components/SplineRobot';
import SpreatorImg from '../assets/rip.f6d7c4dd.svg'

import ProjectSection from '../components/ProjectSection';
import { techStack } from '../TechStack';
import useLocalTime from '../hooks/useLocalTime';
import BubblePack from '../components/TechBubble';
import { useTheme } from '../contexts/ThemeContext';

const Loader = lazy(() => import('../components/Loader'));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const typedRefMobile = useRef<HTMLSpanElement>(null);
  const typedRefDesktop = useRef<HTMLSpanElement>(null);
  const { setIsDarkBackground } = useTheme();
  const localTime = useLocalTime();
  const isDesktop = window.innerWidth >= 1024;
  const handleHover = (color: string) => {
    if (isDesktop) {
      gsap.to(".global-bg", { backgroundColor: color, duration: 0.5 });
    }
  };

  const handleLeave = () => {
    gsap.to(".global-bg", { backgroundColor: "#f2f2f2", duration: 0.5 }); 
  };

  // Set theme based on mobile vs desktop and loading state
  useEffect(() => {
    if (isLoading) {
      setIsDarkBackground(true); // Loader has dark background
    } else {
      // Check if mobile (dark background) or desktop (light background)
      const checkBackground = () => {
        const isMobile = window.innerWidth < 768;
        setIsDarkBackground(isMobile);
      };
      
      checkBackground();
      window.addEventListener('resize', checkBackground);
      return () => window.removeEventListener('resize', checkBackground);
    }
    window.scrollTo(0, 0);
  }, [isLoading, setIsDarkBackground]);


  // Register SplitText plugin
  gsap.registerPlugin(SplitText);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      gsap.fromTo(mainElement, { opacity: 0 , y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    }
  }, []);
  
  useGSAP(
    () => {
      

      if (!isLoading) {
        // Animate mobile version if it exists
        if (typedRefMobile.current) {
          const splitMobile = new SplitText(typedRefMobile.current, {
            type: 'chars',
            charsClass: 'split-char',
          });
          gsap.set(splitMobile.chars, { opacity: 0 });
          gsap.to(splitMobile.chars, {
            opacity: 1,
            duration: .80,
            stagger: 0.1,
            delay: 2,
            ease: 'none',
          });
        }

        // Animate desktop version if it exists
        if (typedRefDesktop.current) {
          const splitDesktop = new SplitText(typedRefDesktop.current, {
            type: 'chars',
            charsClass: 'split-char',
          });
          gsap.set(splitDesktop.chars, { opacity: 0 });
          gsap.to(splitDesktop.chars, {
            opacity: 1,
            duration: .80,
            stagger: 0.1,
            delay: 2,
            ease: 'none',
          });
        }
      }
    },
    { dependencies: [isLoading] }
  );

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <main id="main" className="w-screen pt-16 text-white md:text-black overflow-hidden bg-black md:bg-white">
          <section className="flex bg-black md:bg-white mt-8 md:mt-16 flex-col px-4 md:px-16">
            {/* Mobile Layout: Creative Software Developer together, then availability + corner icon */}
            <div className="block md:hidden">
              {/* Creative Software Developer - Main Title for Mobile */}
              <div className="w-full flex flex-col items-center justify-center mb-8">
                <span className="font-bold text-white w-full headings-regular text-[20vw] text-center ">
                  Creative
                </span>
                <div className="flex flex-col items-center  w-full justify-center">
                  <span className="flex items-center justify-center">
                    {!isLoading && (
                      <span ref={typedRefMobile} className="text-nowrap leading-[0.8] text-[12vw] font-bold text-green-400 cursive-normal-text text-center">
                        Software
                      </span>
                    )}
                  </span>
                  <span className="text-[20vw] font-bold text-white text-center headings-regular">
                    Developer
                  </span>
                </div>
              </div>

              {/* Bottom Row: Availability (left) and Corner Icon (right) for Mobile */}
              <div className="w-full flex flex-row-reverse justify-between items-start">
                {/* Corner Icon - Top on Mobile */}
                <span className="bg-gray-700 rounded-full flex items-center p-2 mb-4">
                  <CornerLeftDown className="w-6 h-6 font-light text-white" />
                </span>
                
                {/* Availability - Bottom on Mobile */}
                <span className="availability w-full flex flex-col items-start text-start text-xs font-mono text-gray-400">
                  <span className="flex flex-col">
                    <span>Currently Available FOR</span>
                    <span>Freelance Worldwide</span>
                  </span>
                  <span className="flex flex-col mt-2">
                    <span>My local Time</span>
                    <span>{localTime}</span>
                  </span>
                </span>
              </div>
            </div>

            {/* Desktop Layout: Original layout */}
            <div className="hidden md:block">
              {/* Hero Title and Availability - Desktop Layout */}
              <div className="w-full flex flex-row justify-between mb-0">
                <span className="font-bold text-black w-[70%] headings-regular text-[12vw] items-start text-left">
                  Creative
                </span>
                <span className="availability w-[30%] flex flex-row items-start justify-between lg:mt-8 gap-4 h-16 text-right pr-8 text-sm font-mono text-gray-600">
                  <span className="flex flex-col text-start">
                    <span>Open to Opportunities</span>
                    <span>Freelance & Remote</span>
                  </span>
                  <span className="flex flex-col text-start">
                    <span>My local Time</span>
                    <span>{localTime}</span>
                  </span>
                </span>
              </div>

              {/* Software Developer Section with Corner Icon - Desktop */}
              <div className="w-full flex flex-col items-center leading-[0.7] gap-8">
                <div className="flex flex-row items-center justify-start gap-4 w-full">
                  <span className="bg-gray-200 rounded-full p-2 mr-4">
                    <CornerLeftDown className="w-8 h-8 font-light text-black" />
                  </span>
                  <div className="flex flex-row items-center pl-20 gap-8">
                    <span className="flex items-center">
                      {!isLoading && (
                        <span ref={typedRefDesktop} className="text-nowrap text-[6.5vw] font-bold text-green-800 cursive-normal-text text-center">
                          Software
                        </span>
                      )}
                    </span>
                    <span className="text-[10vw] font-bold text-black text-start headings-regular">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-4 md:p-8 about md:mt-20 h-full relative mb-0 bg-black md:bg-white">
            <div className='flex flex-col md:flex-row w-full  items-center justify-center gap-8 md:gap-4'>
              <div className='w-full   px-4 md:px-16 md:w-[40%] h-full flex-col flex font-light items-center justify-center text-white md:text-black order-2 md:order-1'>
                <span className='text-center pb-32 md:mb-0 md:text-left content-text font-semibold text-2xl md:text-4xl leading-8 md:leading-10 text-white md:text-black'>
                  <span>Hi, I'm Khush ,</span>
                  <span className='block'>a creative </span>
                  <span className='block'>software developer</span>
                  <span className='block'>who blends code & design</span>
                  <span className='block'>to build seamless</span>
                  <span className='playwrite-it-moderna-cursive text-green-400 md:text-green-500 pl-1'>frontend</span> and <span className='playwrite-it-moderna-cursive text-green-400 md:text-green-500 pl-1'>backend</span>
                  <span className='block'>experiences.</span>
                </span>
              </div>
              <div className='relative Robot w-full md:w-[60%] flex items-center justify-center text-white md:text-black order-1 md:order-2'>
                <div className="w-full h-full md:max-w-none">
                <SplineRobot />
                </div>
              <div className="absolute bottom-2  left-0 right-0 h-12 bg-black md:hidden z-10"></div>
              </div>
            </div>

            {/* Separator positioned at bottom of about section */}
            <div className={`absolute hidden md:block -bottom-px  left-0 right-0 h-36   overflow-hidden`}>
              <img src={SpreatorImg} alt="" className={`  w-full h-full object-cover`} />
            </div>
          </section>

          <section id="showCase" className="global-bg h-full w-full -mt-16 relative z-10 bg-[#414141] md:bg-[#f2f2f2]  transition-colors duration-500">

            <div className="md:mx-auto">
              <div className="flex items-center justify-start p-6 md:p-12 pb-0 w-full">
                <ArrowDownRight className='w-16 h-16 md:w-32 md:h-32 text-gray-200 md:text-gray-600 text-base font-light' />
              </div>

              <div id="about-help" className="flex flex-col items-normal">
                <div className="p-4 md:p-8 pl-8 md:pl-60">
                  <div className='w-full md:w-[30%] mb-8 md:mb-16 lg:mb-32 flex flex-col gap-4'>
                    <span className="cursive-normal-text text-gray-200 md:text-gray-600 font-light text-base md:text-sm">
                      THINGS I <span className='font-bold'>CAN</span> HELP YOU
                      WITH.
                    </span>
                    <h4 className="content-text text-xl text-gray-200 md:text-black md:text-2xl w-full font-semibold">
                      <span>WEB / FRONT-END DEVELOPMENT /</span>
                      <span> BACKEND DEVELOPMENT /</span>
                      <span> FUNCTIONAL WEB APPS </span>
                    </h4>
                  </div>
                  <hr className="border-gray-200 md:border-black mt-4" />
                </div>
              </div>
            </div>
          </section>



          <section id="project" className="global-bg w-full px-4 md:px-8 lg:px-16 py-20 bg-[#414141] md:bg-[#f2f2f2] transition-colors duration-500">

            <ProjectSection onHover={handleHover} onLeave={handleLeave} />

          </section>

<section className="global-bg w-full py-20 h-full -mt-16 relative z-10 bg-[#f2f2f2] transition-colors duration-500">

            <div className="md:mx-auto">
              <div className="flex items-center justify-start p-6 md:p-12 pb-0 w-full">
                <ArrowDownRight className='w-16 h-16 md:w-32 md:h-32 text-gray-600 md:text-gray-600 text-base font-light' />
              </div>

              <div id="about-help" className="flex flex-col items-center">
                <div className="p-4 md:p-8 pl-8 md:pl-40 mb-8 md:mb-16">
                  <div className="flex items-center justify-center w-full">
                    <h2 className="text-3xl md:text-4xl mb-4 md:mb-0 lg:text-8xl headings-regular font-bold text-center text-black md:text-black">
                      <span className="cursive-normal-text text-green-500  md:text-green-500">Tech</span> I Build With
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]">
              <BubblePack data={techStack} />
            </div>
          </section>

        </main>
      )}
    </>
  );
};

export default Home;