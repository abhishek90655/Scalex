
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-dark-gradient z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-scalex-blue/20 rounded-full filter blur-3xl animate-pulse-light"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-scalex-purple/10 rounded-full filter blur-3xl animate-pulse-light animation-delay-500"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4 reveal-on-scroll">
              <span className="text-xs font-medium text-white/80">Welcome to ScaleX AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight reveal-on-scroll">
            Website Personalization at Scale for <span className="text-scalex-lightBlue">Paid Media</span>
            </h1>
            
            <p className="text-lg text-white/80 reveal-on-scroll animate-delay-200">
            Personalize your website for every paid media visitor to improve performance 
            </p>
            <div className="flex flex-wrap gap-4 pt-4 reveal-on-scroll animate-delay-300">
              <Link 
                to="/book-demo"
                className="bg-scalex-blue hover:bg-scalex-blue/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Book a Demo
              </Link>
            </div>
           
          </div>
          
          <div className="md:w-1/2 reveal-on-scroll animate-delay-400">
            <div className="relative">
              {/* Circuit-like lines in background */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0wIDEwIEw0MCAxMCBNMTAgMCBMMTAgNDAgTTAgMzAgTDQwIDMwIE0zMCAwIE0zMCA0MCIgc3Ryb2tlPSIjMzNDM0YwIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIgLz4KPC9zdmc+')]"></div>
              
              {/* AI visualization mockup */}
              <div className="p-2 rounded-xl bg-gradient-to-br from-scalex-blue/30 to-scalex-purple/30 backdrop-blur-sm shadow-xl">
                <div className="bg-scalex-navy/80 p-6 rounded-lg overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 text-sm text-white/60">ScaleX AI Dashboard</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 h-40">
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-24 h-24 text-scalex-lightBlue opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 h-40">
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="h-2 bg-white/20 rounded w-2/3"></div>
                        <div className="h-2 bg-white/20 rounded w-full"></div>
                        <div className="h-2 bg-white/20 rounded w-4/5"></div>
                        <div className="h-2 bg-white/20 rounded w-3/4"></div>
                        <div className="h-2 bg-white/20 rounded w-5/6"></div>
                        <div className="h-2 bg-white/20 rounded w-2/3"></div>
                        <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      </div>
                    </div>
                    <div className="col-span-2 bg-white/5 rounded-lg p-4 h-32">
                      <div className="flex justify-between items-center h-full">
                        <div className="w-20 h-20 rounded-full bg-scalex-blue/30 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-scalex-blue/40 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-scalex-blue/80"></div>
                          </div>
                        </div>
                        <div className="flex-1 ml-6 space-y-3">
                          <div className="h-2 bg-white/20 rounded w-full"></div>
                          <div className="h-2 bg-white/20 rounded w-5/6"></div>
                          <div className="h-2 bg-white/20 rounded w-4/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-scalex-blue to-scalex-purple rounded-xl opacity-30 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-scalex-purple to-scalex-lightBlue rounded-xl opacity-20 animate-float animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




