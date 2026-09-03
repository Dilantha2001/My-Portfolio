import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from '../utils/SplitText';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef();
  const title1Ref = useRef();
  const title2Ref = useRef();
  const title3Ref = useRef();
  const title4Ref = useRef();
  const bgRef = useRef();
  const loaderRef = useRef();
  const loaderIconRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Loader sequence
    tl.to(loaderIconRef.current, {
      scale: 1.5,
      rotation: 90,
      duration: 0.8,
      ease: 'power3.inOut'
    })
    .to(loaderIconRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in'
    })
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 1,
      ease: 'power4.inOut'
    }, "-=0.2");

    // Title reveal animation (character by character sliding up)
    const chars = gsap.utils.toArray('.char', heroRef.current);
    
    tl.to(chars, {
      y: '0%',
      duration: 1,
      stagger: 0.02,
      ease: 'power4.out',
    }, "-=0.4");
    
    tl.from(bgRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 2,
      ease: 'power2.out'
    }, "-=1.2");

  }, { scope: heroRef });

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Custom specific loader */}
      <div className="loader" ref={loaderRef}>
        <div className="loader-icon" ref={loaderIconRef}></div>
      </div>

      <nav className="hero-nav">
        <div className="nav-logo">
          <div className="logo-square"></div>
          NBNZIA
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
        </div>
        <a href="#contact" className="nav-btn">Let's talk</a>
      </nav>

      <div className="hero-bg" ref={bgRef}>
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span ref={title1Ref}><SplitText>EVERY GREAT TRICK</SplitText></span>
          <span ref={title2Ref}><SplitText>HAS THREE PARTS.</SplitText></span>
          <span ref={title3Ref} className="gold-text"><SplitText>YOUR WEBSITE</SplitText></span>
          <span ref={title4Ref}><SplitText>IS THE PRESTIGE.</SplitText></span>
        </h1>
      </div>
    </section>
  );
}
