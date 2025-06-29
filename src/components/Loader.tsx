// import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { Loader2Icon } from "lucide-react";
import  { useEffect, useState, useRef } from "react";

interface LoaderProps {
    isLoading: boolean;
    mainText?: string;
    secondText?: string;
    waitingText?: string;
    highlightSecondText?: boolean;
    highlightWaitingText?: boolean;
}

const Loader = ({ 
    isLoading, 
    mainText = "Khush", 
    secondText = "Ramnani",
    waitingText = "is a",
    highlightSecondText = true,
    highlightWaitingText = false
}: LoaderProps) => {
    const [showWaitingText, setShowWaitingText] = useState(false);
    const waitingTextRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!isLoading) {
            // After loading is complete, show waiting text after 0.7s
            const timer = setTimeout(() => setShowWaitingText(true), 700);
            return () => clearTimeout(timer);
        } else {
            setShowWaitingText(false);
        }
    }, [isLoading]);

    useGSAP(() => {
        if (showWaitingText && waitingTextRef.current) {
            gsap.fromTo(
                waitingTextRef.current,
                { x: 40, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
        }
    }, [showWaitingText]);

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
            
            <span className="headings-regular space-x-1 gap-2 text-3xl md:text-5xl flex relative" >
                <span>{mainText} <span className={`${highlightSecondText ? 'playwrite-it-moderna-cursive italic' : "general-text" }  text-green-500 text-3xl md:text-5xl`}>{secondText? secondText : ""}</span></span>
                <span
                  className={`inline-block ${highlightWaitingText ? 'playwrite-it-moderna-cursive italic text-green-500' : 'text-white'}`}
                  ref={waitingTextRef}
                  style={{ opacity: 0 }}
                >
                  {' '}{waitingText}
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
