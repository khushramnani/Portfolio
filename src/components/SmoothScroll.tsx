// components/SmoothScroll.tsx
"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEl = containerRef.current;

    if (!scrollEl) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (arguments.length && typeof value === "number") {
          locoScroll.scrollTo(value, { duration: 0, disableLerp: true });
          return;
        }
        return scrollEl.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => {
      locoScroll.update();
    });
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
}
