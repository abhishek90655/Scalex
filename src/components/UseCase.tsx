import { useEffect, useRef } from 'react';

const UseCase = () => {
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
    <section id="use-case" className="py-6 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0wIDEwIEw0MCAxMCBNMTAgMCBMMTAgNDAgTTAgMzAgTDQwIDMwIE0zMCAwIE0zMCA0MCIgc3Ryb2tlPSIjMzNDM0YwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiIC8+Cjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      
      <div className="section-container relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4 mx-auto reveal-on-scroll">
          <span className="text-xs font-medium text-white/80">USE CASE</span>
        </div>
        
        <div className="text-center mb-8 space-y-3 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold">
            We are <span className="text-gradient">enhancing</span> Life Sciences R&D
          </h2>
          <p className="max-w-3xl mx-auto text-white">
            Redefining how chemistry is done by integrating advanced tools that streamline workflows, harness data insights, and accelerate breakthroughs in research and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="col-span-1 md:col-span-2 glass-card p-8 reveal-on-scroll">
            <h3 className="text-2xl font-semibold mb-4">Transform Experimental Data</h3>
            <p className="text-white/70 mb-6">
              Our advanced AI algorithms help scientists extract deeper insights from experimental data, identifying patterns that might otherwise go unnoticed. This leads to more informed decision-making and potentially groundbreaking discoveries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-scalex-blue/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-scalex-lightBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Molecular Analysis</h4>
                </div>
                <p className="text-sm text-white/60">Instantly analyze molecular structures and predict properties with our advanced AI models.</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-scalex-blue/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-scalex-lightBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Data Visualization</h4>
                </div>
                <p className="text-sm text-white/60">Transform complex datasets into intuitive visualizations for better understanding and communication.</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-scalex-blue/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-scalex-lightBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Lab Automation</h4>
                </div>
                <p className="text-sm text-white/60">Streamline laboratory processes with automated workflows and intelligent scheduling.</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-scalex-blue/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-scalex-lightBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Collaboration Tools</h4>
                </div>
                <p className="text-sm text-white/60">Enable seamless teamwork with real-time collaboration features designed for scientific research.</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 flex flex-col reveal-on-scroll">
            <h3 className="text-2xl font-semibold mb-4">Success Metrics</h3>
            <div className="flex-1 flex flex-col justify-around">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white/70 text-sm">Time Saved</span>
                  <span className="text-scalex-lightBlue font-medium">85%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-scalex-blue to-scalex-lightBlue h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white/70 text-sm">Data Quality</span>
                  <span className="text-scalex-lightBlue font-medium">92%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-scalex-blue to-scalex-lightBlue h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white/70 text-sm">Research Efficiency</span>
                  <span className="text-scalex-lightBlue font-medium">78%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-scalex-blue to-scalex-lightBlue h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white/70 text-sm">Innovation Rate</span>
                  <span className="text-scalex-lightBlue font-medium">67%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-scalex-blue to-scalex-lightBlue h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
