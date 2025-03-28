
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedLogos from '@/components/TrustedLogos';
import Benefits from '@/components/Benefits';
import Products from '@/components/Products';
import Integrations from '@/components/Integrations';
import UseCase from '@/components/UseCase';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize reveal-on-scroll elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <Hero />
      <TrustedLogos />
      <Benefits />
      <Products />
      <Integrations />
      {/* <UseCase /> */}
      <FAQs />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;