import React, { useEffect, useRef } from 'react';

const HeroSection1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let shapes = [];
    const shapeCount = 3;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Shape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 150 + 80;
        this.points = [];
        this.targetPoints = [];
        this.speed = 0.015;
        this.color = `hsla(${Math.random() * 360}, 70%, 50%, 0.08)`;
        this.generatePoints();
      }

      generatePoints() {
        const numPoints = 5;
        for (let i = 0; i < numPoints; i++) {
          const angle = (i / numPoints) * Math.PI * 2;
          const radius = this.size;
          this.points.push({
            x: this.x + Math.cos(angle) * radius,
            y: this.y + Math.sin(angle) * radius,
          });
          this.targetPoints.push({
            x: this.x + Math.cos(angle) * radius,
            y: this.y + Math.sin(angle) * radius,
          });
        }
      }

      update() {
        if (Math.random() < 0.01) {
          this.targetPoints = this.points.map(point => ({
            x: point.x + (Math.random() - 0.5) * 80,
            y: point.y + (Math.random() - 0.5) * 80,
          }));
        }

        this.points = this.points.map((point, i) => ({
          x: point.x + (this.targetPoints[i].x - point.x) * this.speed,
          y: point.y + (this.targetPoints[i].y - point.y) * this.speed,
        }));
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new Shape());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>

      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="block">Craft Exceptional</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital Solutions
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-lg mx-auto">
            Transform your vision into reality with our innovative tools and
            cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Get Started
            </button>
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 border border-slate-400 text-slate-200 rounded-full font-medium hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Learn More
            </button>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '10K+', label: 'Users' },
              { number: '50+', label: 'Countries' },
              { number: '99%', label: 'Satisfaction' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1; 