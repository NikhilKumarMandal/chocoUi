import { useEffect, useRef } from 'react';

const cohortMembers = [
  { name: 'Rohan Mehta', role: 'Frontend Developer', quote: 'Thanks to the guidance of Hitesh Sir and Piyush Sir, I mastered the art of turning complex ideas into beautiful, responsive UIs that users love.', tech: ['React', 'TypeScript', 'Tailwind'], img: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Priya Sharma', role: 'Full Stack Developer', quote: 'This cohort gave me the confidence to build scalable, production-ready applications using the modern tech stack. It truly bridged the gap between theory and real-world development.', tech: ['Node.js', 'Next.js', 'MongoDB'], img: 'https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Sneha Nair', role: 'Backend Developer', quote: 'From APIs to databases, this cohort helped me understand the backbone of modern applications and how to build them in a clean, scalable way.', tech: ['Python', 'Django', 'PostgreSQL'], img: 'https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Arjun Iyer', role: 'DevOps Engineer', quote: 'Learning about cloud infrastructure and CI/CD pipelines in this cohort was eye-opening. I can now automate and deploy with confidence.', tech: ['Docker', 'AWS', 'CI/CD'], img: 'https://plus.unsplash.com/premium_photo-1682089869602-2ec199cc501a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Kavya Reddy', role: 'Mobile Developer', quote: 'This cohort helped me take my mobile dev skills to the next level. I now understand how to deliver seamless, high-performance apps for iOS and Android.', tech: ['React Native', 'Swift', 'Kotlin'], img: 'https://images.unsplash.com/photo-1667037788724-3bdd9ca61df0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Neha Kapoor', role: 'QA Engineer', quote: 'Quality matters. This cohort taught me how to build and automate test cases that ensure our applications are reliable and bug-free.', tech: ['Cypress', 'Jest', 'Testing Library'], img: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Manish Dubey', role: 'Cloud Architect', quote: 'I now have the skills to design resilient, scalable cloud infrastructures that can handle real-world traffic and complexity — all thanks to this incredible learning journey.', tech: ['Azure', 'Terraform', 'Kubernetes'], img: 'https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Ananya Joshi', role: 'Product Manager', quote: 'This cohort gave me the technical foundation I needed to effectively lead development teams and shape product strategies with clarity and vision.', tech: ['Jira', 'Agile', 'Roadmaps'], img: 'https://images.unsplash.com/photo-1573497019707-1c04de26e58c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const CohortCard = ({ img, name, role, quote, tech }) => {
  return (
    <div className="relative w-[280px] h-[220px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500 group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-blue-900/30 dark:to-gray-800/50" />
      <div className="relative flex h-full flex-col justify-between gap-3 z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              className="rounded-full border-2 border-blue-500 w-12 h-12 object-cover" 
              alt={name} 
              src={img} 
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
              }}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-xs text-blue-600 dark:text-blue-400">{role}</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 italic line-clamp-3 leading-snug">
          "{quote}"
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((skill) => (
            <span 
              key={skill} 
              className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 transition-all duration-200 group-hover:bg-blue-200 group-hover:text-blue-900 dark:group-hover:bg-blue-800 dark:group-hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CustomMarquee = ({ items = [], reverse = false, speed = 30 }) => {
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = contentRef.current;
    if (!marquee || !content || items.length === 0) return;

    const contentWidth = content.scrollWidth / 2;
    const duration = (contentWidth / speed) * 1000;

    const animate = () => {
      if (animationRef.current) {
        animationRef.current.cancel();
      }

      animationRef.current = content.animate(
        [
          { transform: `translateX(${reverse ? -contentWidth : 0}px)` },
          { transform: `translateX(${reverse ? 0 : -contentWidth}px)` },
        ],
        {
          duration,
          iterations: Infinity,
          easing: 'linear',
        }
      );
    };

    // Start animation after ensuring content is rendered
    const startAnimation = () => {
      if (content.scrollWidth > 0) {
        animate();
      } else {
        requestAnimationFrame(startAnimation);
      }
    };

    startAnimation();

    // Handle responsive resize
    const resizeObserver = new ResizeObserver(() => {
      startAnimation();
    });

    resizeObserver.observe(marquee);

    return () => {
      resizeObserver.disconnect();
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, [items, reverse, speed]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      ref={marqueeRef}
      className="relative w-full overflow-hidden py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={contentRef} 
        className="flex items-center gap-5 will-change-transform px-4"
      >
        {[...items, ...items].map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex-shrink-0">
            <CohortCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const CohortMarquee = () => {
  const halfLength = Math.ceil(cohortMembers.length / 2);
  const firstRow = cohortMembers.slice(0, halfLength);
  const secondRow = cohortMembers.slice(halfLength);

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 py-12 md:py-16 lg:py-20 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="relative">
          <CustomMarquee items={firstRow} speed={40} />
          <CustomMarquee items={secondRow} reverse speed={35} />
          
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-950 z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-950 z-10" />
        </div>
      </div>
    </section>
  );
};

export default marquee1;