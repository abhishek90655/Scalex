
import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useTheme } from '@/hooks/use-mobile';
import Autoplay from 'embla-carousel-autoplay';

// const logoImages = [
//   { src: "/lovable-uploads/001c83f0-5c3a-4575-bdae-92572569e95e.png", alt: "Cadence" },
//   { src: "/lovable-uploads/0cfc92e8-2ea9-4dcf-b295-7817fec28ebf.png", alt: "Distra" },
//   { src: "/lovable-uploads/ffffd9c2-f359-4d74-b46e-35a67f677c9e.png", alt: "One Bite" },
//   { src: "/lovable-uploads/9490e678-1364-4f3c-b942-2d7ef5e2e09c.png", alt: "Kaseme" },
//   { src: "/lovable-uploads/7cf490b9-c3bf-41c0-a826-5b8d712aa7e8.png", alt: "Ryderwear" },
//   { src: "/lovable-uploads/43f05bd8-d0f0-4e47-bb15-5be811b62523.png", alt: "Diha Clinic" },
//   { src: "/lovable-uploads/efccf7fa-f508-4bf3-bd4f-688583a8aec8.png", alt: "iQuanti" },
//   { src: "/lovable-uploads/da8c72e6-6c8a-43f2-932e-4f096cd6dd07.png", alt: "Sunrise Brands" },
//   { src: "/lovable-uploads/35677f49-6b93-43aa-8fd2-f9b59af702f1.png", alt: "Total Environment" },
//   { src: "/lovable-uploads/4098ad52-5f7a-4ff9-9bde-3082b442cf4d.png", alt: "SaaS Labs" },
// ];

// Import all logos from the src/logos folder
import cadenceLogo from '@/logos/CADENCE.png';
import dihaLogo from '@/logos/Diha.png';
import iQuantiLogo from '@/logos/iQuanti.png';
import kasemeLogo from '@/logos/Kaseme.png';
import ryderwearLogo from '@/logos/Ryderwear.png';
import saasLogo from '@/logos/Saas.png';
import sbLogo from '@/logos/SUNRISE.png';
import teLogo from '@/logos/TOTAL ENVIRONMENT.png';
import nistraslogo from '@/logos/NISTRAS.png';
import onebitelogo from '@/logos/ONE BITES.png';

// Create an array with the imported logos
const logoImages = [
  { src: cadenceLogo, alt: "Cadence" },
  { src: kasemeLogo, alt: "Kaseme" },
  { src: ryderwearLogo, alt: "Ryderwear" },
  { src: dihaLogo, alt: "Diha Clinic" },
  { src: iQuantiLogo, alt: "iQuanti" },
  { src: sbLogo, alt: "Sunrise Brands" },
  { src: teLogo, alt: "Total Environment" },
  { src: saasLogo, alt: "SaaS Labs" },
  { src: nistraslogo, alt: "NISTRAS" },
  { src: onebitelogo, alt: "ONE BITES" },
];

const TrustedLogos = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { isMobile } = useTheme();
  
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

  // Configure autoplay plugin with faster speed for floating effect
  const plugin = useRef(
    Autoplay({
      delay: 0, // No delay between transitions
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-background/90 to-scalex-navy/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-10 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold">
            Trusted by the <span className="text-scalex-lightBlue">leading advertisers</span>
          </h2>
        </div>
        
        <div className="w-full overflow-hidden reveal-on-scroll animate-delay-200">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: false,
              skipSnaps: true,
              inViewThreshold: 0,
              duration: 10000, // Increased from 100 to 300 to slow down the animation speed
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="flex items-center">
              {logoImages.map((logo, index) => (
                <CarouselItem 
                  key={index} 
                  className="basis-1/2 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 pl-2 md:pl-4"
                >
                  <div className="h-24 flex items-center justify-center p-4 transition-transform hover:scale-105">
                    <img 
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-12 md:max-h-16 max-w-full object-contain filter brightness-[0.85] hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
              
              {/* Duplicate logos to create a seamless continuous floating effect */}
              {logoImages.map((logo, index) => (
                <CarouselItem 
                  key={`duplicate-${index}`} 
                  className="basis-1/2 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 pl-2 md:pl-4"
                >
                  <div className="h-24 flex items-center justify-center p-4 transition-transform hover:scale-105">
                    <img 
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-12 md:max-h-16 max-w-full object-contain filter brightness-[0.85] hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrustedLogos;
