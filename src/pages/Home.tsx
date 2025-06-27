import { useGSAP } from '@gsap/react';
import { ArrowDownRight, CornerLeftDown, MoveDownRight } from 'lucide-react';
import { useEffect, useRef, useState, lazy } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import SplineRobot from '../components/SplineRobot';
import SpreatorImg from '../assets/rip.f6d7c4dd.svg'

import ProjectSection from '../components/ProjectSection';
import { techStack } from '../TechStack';
import TechBubble from '../components/TechBubble';
import BubblePack from '../components/TechBubble';

const Loader = lazy(() => import('../components/Loader'));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const typedRef = useRef<HTMLSpanElement>(null);

  const [bgColor, setBgColor] = useState("bg-[#f2f2f2]");

  const handleHover = (color: string) => {
    gsap.to(".global-bg", { backgroundColor: color, duration: 0.5 });
  };

  const handleLeave = () => {
    gsap.to(".global-bg", { backgroundColor: "#f2f2f2", duration: 0.5 });
  };


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
          delay: 2,
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
        <main className=" w-screen text-white overflow-hidden">
          <section className="flex bg-white mt-16 flex-col px-16">
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

          <section className="p-8 about  lg:mt-20 h-full relative mb-0">
            <div className='flex flex-col md:flex-row w-full px-16 items-center justify-center gap-4'>
              <div className='w-[40%] h-full  flex-col  flex font-light items-center justify-center text-black '>
                <span className='text-left content-text  font-semibold  text-4xl leading-10 primary-color '>
                  <span>Hi, I'm Khush ,</span>
                  <span className='block'>a creative </span>
                  <span className='block'>software developer</span>
                  <span className='block'>who blends code & design</span>
                  <span className='block'>to build seamless</span>
                  <span className='playwrite-it-moderna-cursive text-green-500 pl-1'>frontend</span> and <span className='playwrite-it-moderna-cursive text-green-500 pl-1'>backend</span>
                  <span className='block'>experiences.</span>
                </span>

              </div>
              <div className='w-[60%]  flex items-center justify-center text-black'>
                <SplineRobot />
              </div>
            </div>

            {/* Separator positioned at bottom of about section */}
            <div className={`absolute -bottom-px left-0 right-0 h-36   overflow-hidden`}>
              <img src={SpreatorImg} alt="" className={`  w-full h-full object-cover`} />
            </div>
          </section>

          <section id="showCase" className={`global-bg h-full w-full -mt-16 relative z-10 ${bgColor} transition-colors duration-500`}>

            <div className=" md:mx-auto">
              <div className="flex items-center justify-start p-12 pb-0 w-full">
                <ArrowDownRight className='w-32 h-32 secondary-color text-base font-light ' />
              </div>

              <div id="about-help" className="flex flex-col items-normal  ">
                <div className="p-8 pl-60">
                  <div className='w-[30%] md:mb-16 lg:mb-32 flex flex-col gap-4'>
                    <span className="cursive-normal-text secondary-color  font-light text-base ">
                      THINGS I <span className='font-bold '>CAN</span> HELP YOU
                      WITH.
                    </span>
                    <h4 className="content-text text-2xl w-full font-semibold primary-color">
                      <span>WEB / FRONT-END DEVELOPMENT /</span>
                      <span> BACKEND DEVELOPMENT /</span>
                      <span> Functional web apps </span>
                    </h4>
                  </div>
                  <hr className="  border-black mt-4 " />
                </div>

              </div>
            </div>
          </section>



          <section id="project" className={`global-bg  w-full px-4 md:px-8 lg:px-16 py-20  ${bgColor} transition-colors duration-500`}>

            <ProjectSection onHover={handleHover} onLeave={handleLeave} />

          </section>

<section className={` global-bg w-full py-20 h-full  -mt-16 relative z-10 ${bgColor} transition-colors duration-500`}>


            <div className=" md:mx-auto">
              <div className="flex items-center justify-start p-12 pb-0 w-full">
                <ArrowDownRight className='w-32 h-32 secondary-color text-base font-light ' />
              </div>

              <div id="about-help" className="flex flex-col items-center  ">
                <div className="p-8 pl-40 mb-16">
                  <div className="flex items-center justify-center w-full">
            <h2 className="text-4xl lg:text-8xl headings-regular font-bold text-center primary-color">
              <span className="cursive-normal-text text-green-500">Tech</span> I Build With
            </h2>
          </div>
                  {/* <hr className="  border-black mt-4 " /> */}
                </div>

              </div>
            </div>
          
      <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
        <BubblePack data={techStack} />
      </div>
    </section>

        </main>
      )}
    </>
  );
};

export default Home;