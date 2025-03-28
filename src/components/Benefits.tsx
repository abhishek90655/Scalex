
import { useEffect, useRef } from 'react';

const benefits = [
  {
    title: 'Lower Customer Acquisition Cost (CAC)',
    description: 'Improve conversion rates by 10%-30%, leading to a significant reduction in CAC.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12H8M16 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V8M12 16V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Lightning-Fast Turnaround',
    description: 'Launch high-converting website experiences in minutes—not weeks—using our no-code platform and Contextual AI.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 5.63604L17.6569 6.34315M6.34315 17.6569L5.63604 18.364M18.364 18.364L17.6569 17.6569M6.34315 6.34315L5.63604 5.63604M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Continuous Optimization & Testing',
    description: 'Simultaneously test multiple experiences at a granular keyword or ad level to maximize performance.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M12 5.5V3M12 21V18.5M18.5 12H21M3 12H5.5M6.5 6.5L8.5 8.5M17.5 17.5L15.5 15.5M17.5 6.5L15.5 8.5M6.5 17.5L8.5 15.5M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Seamless Customer Experience',
    description: 'Align targeting, ads, and landing pages to create a frictionless user journey that drives better results.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  }
];

const Benefits = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));
    
    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, []);
  
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-scalex-navy/30 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 space-y-4 reveal-on-scroll">
          <h2 className="inline-block text-3xl md:text-4xl font-bold">
          Drive Scale Lower CAC
          </h2>
          <p className="max-w-3xl mx-auto text-white/70">
          Achieve greater scale while lowering Customer Acquisition Cost (CAC) through optimized <span className="text-scalex-lightBlue">high-performing</span>,<span className="text-scalex-lightBlue"> brand compliant</span> experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className={`glass-card p-6 transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl reveal-on-scroll animate-delay-${index * 100}`}
            >
              <div className="mb-4 text-scalex-lightBlue">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
