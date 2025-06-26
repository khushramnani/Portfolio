import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type Tech = {
  name: string;
  size: number;
};

type Props = {
  data: Tech[];
};

type Bubble = Tech & {
  x: number;
  y: number;
};

const BubblePack = ({ data }: Props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });
  const [isVisible, setIsVisible] = useState(false);

  // Get responsive scale factor based on screen width
  const getScaleFactor = (screenWidth: number) => {
    if (screenWidth < 640) return 0.4; // Mobile - much smaller
    if (screenWidth < 768) return 0.6; // Small tablet
    if (screenWidth < 1024) return 0.8; // Tablet
    return 1; // Desktop
  };

  // Update dimensions based on container size
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: width || 1200,
          height: height || 600
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // ScrollTrigger animation setup
  useGSAP(() => {
    if (containerRef.current && svgRef.current) {
      // Set initial state - bubbles scaled to 0
      gsap.set(svgRef.current.querySelectorAll('circle'), { scale: 0 });
      gsap.set(svgRef.current.querySelectorAll('text'), { scale: 0, opacity: 0 });

      // Create ScrollTrigger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          onEnter: () => setIsVisible(true),
          onLeave: () => setIsVisible(false),
          onEnterBack: () => setIsVisible(true),
          onLeaveBack: () => setIsVisible(false),
        }
      });

      // Animate bubbles entering with stagger
      tl.to(svgRef.current.querySelectorAll('circle'), {
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1
      })
      .to(svgRef.current.querySelectorAll('text'), {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.4");

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [bubbles]); // Re-run when bubbles update

  useEffect(() => {
    const { width, height } = dimensions;
    const scaleFactor = getScaleFactor(width);

    // Set up initial positions with responsive bubble sizes
    const nodes: Bubble[] = data.map(d => ({
      ...d,
      size: d.size * 2 * scaleFactor, // Apply responsive scaling
      x: Math.random() * width,
      y: Math.random() * height,
    }));

    // Create the simulation with wider spread
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'collide',
        d3.forceCollide<Bubble>().radius(d => d.size / 2 + (scaleFactor * 10)).iterations(4)
      )
      .force('x', d3.forceX(width / 2).strength(0.005)) // Very weak center force for maximum spread
      .force('y', d3.forceY(height / 2).strength(0.005)) // Very weak center force for maximum spread
      .alpha(1.0)
      .alphaDecay(0.008) // Very slow decay for more movement
      .on('tick', () => {
        // Keep bubbles within bounds
        nodes.forEach(node => {
          const radius = node.size / 2;
          node.x = Math.max(radius, Math.min(width - radius, node.x || 0));
          node.y = Math.max(radius, Math.min(height - radius, node.y || 0));
        });
        setBubbles([...nodes]);
      });

    return () => {
      simulation.stop();
    };
  }, [data, dimensions]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <svg 
        ref={svgRef} 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {bubbles.map((bubble, i) => (
          <g key={i} transform={`translate(${bubble.x}, ${bubble.y})`}>
            <circle
              r={bubble.size / 2}
              fill="#ec4899"
              stroke="#fff"
              strokeWidth={2}
              className="hover:fill-pink-400 transition-colors duration-300 bubble-circle"
              style={{ transformOrigin: 'center' }}
            />
            <text
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize={Math.max(8, bubble.size / 6)} // Smaller minimum font size for mobile
              fill="#fff"
              fontWeight="bold"
              className="pointer-events-none select-none bubble-text"
              style={{ transformOrigin: 'center' }}
            >
              {bubble.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BubblePack;
