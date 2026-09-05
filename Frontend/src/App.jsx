import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import SectionTwo from './components/SectionTwo';
import Process from './components/Process';
import Services from './components/Services';
import FrontendWorks from './components/FrontendWorks';
import Work from './components/Work';
import PhraseScroll from './components/PhraseScroll';
import ThreeParallaxGallery from './components/ThreeParallaxGallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const lenisRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <Hero />
      
      <SectionTwo />
      <Process />
      <Services />
      <FrontendWorks />
      <Work />
      <PhraseScroll />
      <ThreeParallaxGallery />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
