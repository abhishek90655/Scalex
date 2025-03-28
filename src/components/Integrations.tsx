
import { useEffect, useRef } from 'react';

const integrations = [
  {
    name: "Webflow",
    logo: "https://www.unusual.ai/assets/integrations/webflow.svg"
  },
  {
    name: "WordPress",
    logo: "https://www.unusual.ai/_next/image?url=%2Fassets%2Fintegrations%2Fwordpress.png&w=128&q=75"
  },
  {
    name: "Wix",
    logo: "https://www.unusual.ai/assets/integrations/wix.svg"
  },
  {
    name: "Squarespace",
    logo: "https://www.unusual.ai/_next/image?url=%2Fassets%2Fintegrations%2FSquarespace%2BIcon.png&w=128&q=75"
  },
  {
    name: "Google",
    logo: "https://www.unusual.ai/assets/integrations/google.svg"
  },
  {
    name: "Hubspot",
    logo: "https://www.unusual.ai/assets/integrations/hubspot.svg"
  },
  {
    name: "LinkedIn",
    logo: "https://www.unusual.ai/_next/image?url=%2Fassets%2Fintegrations%2FLinkedIn%20Logo.png&w=128&q=75"
  },
  {
    name: "Framer",
    logo: "https://www.unusual.ai/_next/image?url=%2Fassets%2Fintegrations%2Fframer.png&w=128&q=75"
  }
];

const Integrations = () => {
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
    <section id="integrations" className="relative overflow-hidden bg-background py-6">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0wIDEwIEw0MCAxMCBNMTAgMCBMMTAgNDAgTTAgMzAgTDQwIDMwIE0zMCAwIE0zMCA0MCIgc3Ryb2tlPSIjMzNDM0YwIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4 reveal-on-scroll">
          <span className="text-xs font-medium text-white/80">INTEGRATIONS</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-on-scroll">
          Works with your <span className="text-scalex-lightBlue">existing stack</span>
        </h2>
        
        <p className="max-w-2xl text-white/70 mb-8 reveal-on-scroll">
          Get started in minutes. <span className="text-scalex-lightBlue font-bold">Scalex AI</span> works with any website builder and integrates with your favorite marketing tools. No migration or rebuilding required.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 reveal-on-scroll">
          {integrations.map((integration, index) => (
            <div 
              key={integration.name} 
              className="flex items-center justify-center h-20 bg-white/5 rounded-xl backdrop-blur-sm p-4 hover:bg-white/10 transition-colors"
            >
              <img 
                src={integration.logo} 
                alt={integration.name} 
                className="max-h-10 max-w-24 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
