// import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { Loader2Icon } from "lucide-react";
import  { useEffect, useState, useRef } from "react";

const Loader = ({ isLoading }: { isLoading: boolean }) => {
    const [showIsA, setShowIsA] = useState(false);
    const isARef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!isLoading) {
            // After loading is complete, show "Is a" after 0.7s
            const timer = setTimeout(() => setShowIsA(true), 700);
            return () => clearTimeout(timer);
        } else {
            setShowIsA(false);
        }
    }, [isLoading]);

    useGSAP(() => {
        if (showIsA && isARef.current) {
            gsap.fromTo(
                isARef.current,
                { x: 40, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
        }
    }, [showIsA]);

    useGSAP(() => {
        if (!isLoading) {
            const tl = gsap.timeline();
            // Animate both loader-container and green-screen together
            tl.to('.loader-container', {
                duration: 1,
                y: '-100vh',
                ease: 'power2.inOut',
                delay: 1.5,
            }, 0)
            .to('.green-screen', {
                duration: 1,
                y: '-100vh',
                height: 0,
                ease: 'power2.inOut',
                delay: 1.5,
            }, 0);
        }
    }, [isLoading]);
  return (
<>
<div className='h-screen loader-container bg-black flex items-center flex-col justify-between w-screen fixed top-0 left-0 z-[60]' >
    <div className='loader h-[90vh] flex items-center justify-center w-full'>
        <div className='loader-inner flex flex-col text-white gap-3 items-center justify-center'>
            
            <span className="headings-regular space-x-1 gap-2 text-5xl flex relative" >
                <span>Khush <span className={`${showIsA? 'playwrite-it-moderna-cursive italic' : "general-text" }  text-green-500 text-5xl`}>Ramnani</span></span>
                <span
                  className="inline-block"
                  ref={isARef}
                  style={{ opacity: 0 }}
                >
                  {' '}is a
                </span>
            </span>
            
        </div>
    </div>
    <div className="flex items-center justify-center w-full h-[10vh]">
    <Loader2Icon className={isLoading ? "animate-spin text-white w-10 h-10" : ""}/>
    </div>
</div>
    <div className='h-screen green-screen bg-green-500 ' style={{position: 'fixed', top: '100vh', left: 0, width: '100vw', zIndex: 55, height: '100vh'}}>
        
    </div>

</>
  )
}

export default Loader
