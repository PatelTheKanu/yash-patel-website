import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

const lightningFlash = keyframes`
  0%, 100% { opacity: 0; }
  25% { opacity: 1; }
  30% { opacity: 0; }
  35% { opacity: 0.8; }
  40% { opacity: 0; }
  45% { opacity: 0.4; }
  50% { opacity: 0; }
`;

const IntroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.background.default,
  zIndex: 2,
}));

interface Point {
  x: number;
  y: number;
}

interface LightningBolt {
  startPoint: Point;
  points: Point[];
}

const LightningCanvas = styled('canvas')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
});

const TextContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  '& h1': {
    fontSize: '3.5rem',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: 0,
    animation: 'fadeIn 1s ease-out forwards',
    textShadow: '0 0 30px rgba(149, 117, 205, 0.3)',
  },
  '& h2': {
    fontSize: '2rem',
    fontWeight: 400,
    color: theme.palette.text.secondary,
    opacity: 0,
    animation: 'fadeIn 1s ease-out 0.5s forwards',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

const generateFractalPoints = (start: Point, end: Point, offset: number): Point[] => {
  const points: Point[] = [start];

  if (offset < 5) {
    points.push(end);
    return points;
  }

  const midPoint = {
    x: (start.x + end.x) / 2,
    y: (start.y + end.y) / 2,
  };

  // Add random displacement to midpoint
  midPoint.x += (Math.random() - 0.5) * offset;
  midPoint.y += (Math.random() - 0.5) * offset;

  // Generate points for each half
  const firstHalf = generateFractalPoints(start, midPoint, offset / 2);
  const secondHalf = generateFractalPoints(midPoint, end, offset / 2);

  // Combine points, avoiding duplicates at the connection
  return [...firstHalf.slice(0, -1), ...secondHalf];
};

export const IntroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<Point>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightningBoltsRef = useRef<LightningBolt[]>([]);
  const animationFrameRef = useRef<number>(0);

  const drawLightning = (ctx: CanvasRenderingContext2D, points: Point[]) => {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.strokeStyle = 'rgba(149, 117, 205, 0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw glow effect
    ctx.shadowColor = 'rgba(149, 117, 205, 0.6)';
    ctx.shadowBlur = 15;
    ctx.strokeStyle = 'rgba(149, 117, 205, 0.8)';
    ctx.lineWidth = 1;
    ctx.stroke();
  };

  const updateAndDrawLightning = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Generate new lightning bolts occasionally
    if (Math.random() < 0.1 || lightningBoltsRef.current.length === 0) {
      const startPoint = {
        x: Math.random() * canvas.width - 24, // need to subtract padding
        y: Math.random() * canvas.height - 24,
      };
      const points = generateFractalPoints(startPoint, mousePosition, 150);
      lightningBoltsRef.current = [
        {
          startPoint,
          points,
        },
      ];
    }

    // Draw all lightning bolts
    lightningBoltsRef.current.forEach((bolt) => {
      drawLightning(ctx, bolt.points);
    });

    animationFrameRef.current = requestAnimationFrame(updateAndDrawLightning);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      animationFrameRef.current = requestAnimationFrame(updateAndDrawLightning);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, []);

  return (
    <IntroContainer ref={containerRef}>
      <LightningCanvas ref={canvasRef} />
      <TextContainer>
        <Typography variant="h1" component="h1">
          Hello world, I&apos;m Yash.
        </Typography>
        <Typography variant="h2" component="h2">
          I am a software engineer.
        </Typography>
      </TextContainer>
    </IntroContainer>
  );
};
