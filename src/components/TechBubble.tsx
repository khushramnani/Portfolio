import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

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
  vx?: number;
  vy?: number;
};

const BubblePack = ({ data }: Props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });
  const simulationRef = useRef<d3.Simulation<Bubble, undefined> | null>(null);

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

  useEffect(() => {
    const { width, height } = dimensions;
    const scaleFactor = getScaleFactor(width);

    // Set up initial positions with responsive bubble sizes
    const nodes: Bubble[] = data.map(d => ({
      ...d,
      size: d.size * 2 * scaleFactor, // Apply responsive scaling
      x: Math.random() * width,
      y: Math.random() * (height * 0.8) + (height * 0.1), // Natural D3 positions
    }));

    // Create the simulation with smooth natural movement (restored old working code)
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'collide',
        d3.forceCollide<Bubble>().radius(d => d.size / 2 + (scaleFactor * 10)).iterations(3)
      )
      .force('x', d3.forceX(width / 2).strength(0.005)) // Gentle centering like before
      .force('y', d3.forceY(height * 0.6).strength(0.005))
      // Gentle charge force for natural repulsion/movement
      .force('charge', d3.forceManyBody().strength(-20))
      .alpha(1.0) // Full energy for movement
      .alphaDecay(0.002) // Slow decay to keep movement going longer
      .alphaMin(0.001) // Lower minimum to maintain subtle movement
      .on('tick', () => {
        nodes.forEach(node => {
          const radius = node.size / 2;
          if (node.x !== undefined) node.x = Math.max(radius, Math.min(width - radius, node.x));
          if (node.y !== undefined) node.y = Math.max(radius, Math.min(height - radius, node.y));
        });
        setBubbles([...nodes]);
      });

    simulationRef.current = simulation;

    // Keep the simulation running with gentle restarts (restored old working approach)
    const keepAlive = setInterval(() => {
      if (simulation.alpha() < 0.01) {
        simulation.alpha(0.02).restart(); // Gentle restart for continuous floating
      }
    }, 5000); // Check every 5 seconds

    return () => {
      simulation.stop();
      clearInterval(keepAlive);
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
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {bubbles.map((bubble, i) => (
          <g 
            key={i} 
            transform={`translate(${bubble.x}, ${bubble.y})`}
            className="bubble-group"
            style={{ 
              opacity: 1, // Always visible - no animation
              transformOrigin: 'center center',
              transition: 'none', // No transitions needed
              willChange: 'transform' // Only transform will change via D3
            }}
          >
            <circle
              r={bubble.size / 2}
              fill="#222222"
              stroke="#fff"
              strokeWidth={2}
              className="hover:fill-green-700 transition-colors duration-300 drop-shadow-lg"
              filter="url(#glow)"
            />
            <text
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize={Math.max(8, bubble.size / 6)}
              fill="#fff"
              fontWeight="bold"
              className="pointer-events-none select-none drop-shadow-sm"
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
