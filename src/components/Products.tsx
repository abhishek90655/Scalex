
import { useEffect, useRef } from 'react';
import strictBrand from '/src/strickbrand.jpg';

const features = [
  {
    id: 'editor',
    badge: ' Key Features',
    title: 'Strict Adherence to Brand Guidelines',
    description: 'ScaleX AI ensures personalized experiences stay true to your brand guidelines by working within your existing website framework.',
    image: '/src/strickbrand.jpg',
  },
  {
    id: 'GEN AI',
    badge: ' Key Features',
    title: 'Contextual Gen AI ',
    description: 'ScaleX AI is trained on your business, products, services, and tone, delivering highly relevant and compliant content suggestions.',
    image: 'https://kotaielectronics.com/wp-content/uploads/2024/01/on-device-generative-ai-with-sub-10-billion-parameter-models-2048x1308.jpg'
  },
  // {
  //   id: 'writer',
  //   badge: 'Write',
  //   title: 'Automated Procedure Writer',
  //   description: 'Effortlessly transform half-written shorthand steps into clear, accurate, and meaningful experimental procedures with our automated procedure writer. Tailor the output to match journal publication, patent, or internal documentation standards.',
  //   image: 'https://flaskai.co/wp-content/uploads/2024/11/pexels-photo-17485738-17485738-scaled.jpg'
  // },
  // {
  //   id: 'extractor',
  //   badge: 'Extract and Store',
  //   title: 'Automated Data Extractor',
  //   description: 'Simplify R&D workflows by automatically extracting and organizing from raw datasets. Reduce manual errors and convert unstructured data into ready-to-use formats, saving huge amount of time when preparing documentation for patents and journal submissions.',
  //   image: 'https://flaskai.co/wp-content/uploads/2024/11/pexels-photo-225250-225250-scaled.jpg'
  // }
];

const Products = () => {
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
    <section id="products" className="py-4 relative overflow-hidden">
      <div className="section-container">
        {features.map((feature, index) => (
          <div 
            key={feature.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 py-6 border-b border-white/10 last:border-0 reveal-on-scroll`}
          >
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-2">
                <span className="text-xs font-medium text-white/80">{feature.badge}</span>
              </div>
              <h2 className="text-3xl font-bold">{feature.title}</h2>
              <p className="text-white leading-relaxed">{feature.description}</p>
              {/* <button className="bg-transparent hover:bg-white/10 text-white/80 border border-white/20 font-medium px-5 py-2 rounded-lg transition-all duration-300 text-sm">
              Key Features
              </button> */}
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
