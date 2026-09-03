import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../utils/SplitText';
import './SectionTwo.css';

gsap.registerPlugin(ScrollTrigger);

export default function SectionTwo() {
  const sectionRef = useRef();
  const textRef = useRef();
  const marqueeRef = useRef();
  const headingRef = useRef();

  useGSAP(() => {
    // Text reveal (custom split text)
    const chars = gsap.utils.toArray('.char', headingRef.current);
    
    gsap.to(chars, {
      y: '0%',
      duration: 0.8,
      stagger: 0.02,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
    });

    // Fade in text body
    gsap.from('.s2-desc-text, .s2-actions', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 70%',
      },
    });

    // Infinite Marquee
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 15,
      repeat: -1
    });

  }, { scope: sectionRef });

  return (
    <section className="section-two" ref={sectionRef} id="about">
      <div className="s2-grid">
        <div className="s2-left">
          <div className="s2-tag">CERTIFIED WEBFLOW PARTNER</div>
          <div className="s2-tag">7+ YEARS EXP</div>
          <div className="s2-tag">UI/UX DESIGN</div>
          
          <div className="s2-cards">
            {/* Placeholder for interactive cards */}
            <div className="s2-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=400')" }}></div>
            <div className="s2-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400')" }}></div>
          </div>
        </div>

        <div className="s2-right" ref={textRef}>
          <h2 className="s2-desc-heading" ref={headingRef}>
            <SplitText>
              Webflow developer with 7+ years of experience, a team of designers, animators, and strategists.
            </SplitText>
          </h2>
          <p className="s2-desc-text">
            Building digital experiences that convert visitors into believers. Every animation is crafted to improve usability, reinforce your brand, and create a memorable experience.
          </p>
          
          <div className="s2-actions">
            <button className="btn-primary">Let's talk</button>
            <button className="btn-secondary">See the work</button>
          </div>
        </div>
      </div>

      <div className="s2-marquee-container">
        <div className="s2-marquee" ref={marqueeRef}>
          <span>117+ PROJECTS DELIVERED ♣ 15+ COUNTRIES ♣ GSAP MOTION ♣ WEBFLOW AWARDS ♣</span>
          <span>117+ PROJECTS DELIVERED ♣ 15+ COUNTRIES ♣ GSAP MOTION ♣ WEBFLOW AWARDS ♣</span>
        </div>
      </div>
    </section>
  );
}
