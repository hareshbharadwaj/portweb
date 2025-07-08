import { useEffect, useRef } from 'react';

export function JarvisBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    const lines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      life: number;
      maxLife: number;
    }> = [];

    const hexagons: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }> = [];

    const circles: Array<{
      x: number;
      y: number;
      radius: number;
      pulsePhase: number;
      pulseSpeed: number;
      opacity: number;
      vx: number;
      vy: number;
    }> = [];

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 50
      });
    }

    // Create hexagons
    for (let i = 0; i < 8; i++) {
      hexagons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 40,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        opacity: 0.1 + Math.random() * 0.2
      });
    }

    // Create orange circles (Jarvis-style)
    for (let i = 0; i < 12; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 15 + Math.random() * 35,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        opacity: 0.15 + Math.random() * 0.25,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }

    // Draw hexagon
    const drawHexagon = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    };

    // Draw circle with pulsing effect
    const drawCircle = (x: number, y: number, radius: number, pulsePhase: number, opacity: number) => {
      const pulseFactor = 1 + Math.sin(pulsePhase) * 0.3;
      const actualRadius = radius * pulseFactor;
      
      ctx.save();
      ctx.globalAlpha = opacity;
      
      // Outer circle (orange glow)
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, actualRadius);
      gradient.addColorStop(0, 'rgba(255, 140, 0, 0.8)'); // Orange center
      gradient.addColorStop(0.7, 'rgba(255, 165, 0, 0.3)'); // Orange fade
      gradient.addColorStop(1, 'rgba(255, 140, 0, 0)'); // Transparent edge
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, actualRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner circle border
      ctx.strokeStyle = `rgba(255, 140, 0, ${opacity * 0.8})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, actualRadius * 0.6, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.restore();
    };

    // Draw grid lines
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.05)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      drawGrid();

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if life exceeded
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle
        const opacity = 1 - (particle.life / particle.maxLife);
        ctx.fillStyle = `rgba(99, 102, 241, ${opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              const opacity = (1 - distance / 120) * 0.3;
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      // Update and draw hexagons
      hexagons.forEach(hexagon => {
        hexagon.rotation += hexagon.rotationSpeed;
        hexagon.x += Math.sin(Date.now() * 0.001 + hexagon.y * 0.01) * 0.2;
        hexagon.y += Math.cos(Date.now() * 0.001 + hexagon.x * 0.01) * 0.2;

        // Wrap around
        if (hexagon.x < -50) hexagon.x = canvas.width + 50;
        if (hexagon.x > canvas.width + 50) hexagon.x = -50;
        if (hexagon.y < -50) hexagon.y = canvas.height + 50;
        if (hexagon.y > canvas.height + 50) hexagon.y = -50;

        drawHexagon(hexagon.x, hexagon.y, hexagon.size, hexagon.rotation, hexagon.opacity);
      });

      // Update and draw orange circles
      circles.forEach(circle => {
        // Update position
        circle.x += circle.vx;
        circle.y += circle.vy;
        
        // Update pulse phase
        circle.pulsePhase += circle.pulseSpeed;
        
        // Wrap around screen
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius;
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius;
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius;
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius;
        
        // Draw circle
        drawCircle(circle.x, circle.y, circle.radius, circle.pulsePhase, circle.opacity);
      });

      // Scanning lines effect
      const time = Date.now() * 0.002;
      for (let i = 0; i < 3; i++) {
        const y = ((time + i * 2) % 8) * (canvas.height / 8);
        const gradient = ctx.createLinearGradient(0, y - 10, 0, y + 10);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0)');
        gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.2)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, y - 10, canvas.width, 20);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}