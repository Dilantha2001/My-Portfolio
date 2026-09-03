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
    // Scrubbed text reveal (color fill effect)
    const chars = gsap.utils.toArray('.char', headingRef.current);
    
    // Text starts hidden
    gsap.set(chars, { opacity: 0, color: 'transparent', y: '0%' });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: 1,
      }
    });

    chars.forEach((char, index) => {
      // Step 1: Character appears and turns red
      tl.to(char, { 
        opacity: 1, 
        color: '#e33b26', 
        duration: 0.5,
        ease: 'power1.inOut'
      }, index * 0.1)
      // Step 2: Character transitions to black
      .to(char, { 
        color: '#111111', 
        duration: 0.5,
        ease: 'power1.inOut'
      }, (index * 0.1) + 0.3); // Starts turning black slightly before the red finishes
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

    // Expanding Video Transition
    gsap.to('.s2-expanding-video', {
      scale: 3.5,
      x: () => {
        const el = document.querySelector('.s2-expanding-video');
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        return (window.innerWidth / 2) - rect.left - (rect.width / 2);
      },
      y: () => window.innerHeight * 0.2, // Reduced this drastically so it stays well within the white page and cannot bleed out
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'bottom 80%',
        end: 'bottom -10%', // Stop the pin even earlier
        scrub: true,
        pin: '.s2-expanding-video', 
        pinSpacing: false
      }
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
            {/* The expanding video thumbnail */}
            <div className="s2-expanding-video">
              <div className="s2-video-inner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600')" }}>
                <div className="play-btn">▶</div>
              </div>
            </div>
          </div>
        </div>

        <div className="s2-right" ref={textRef}>
          <h2 className="s2-desc-heading" ref={headingRef}>
            <SplitText>
              10 years as a pro illusionist taught me how to capture attention and bend reality.
            </SplitText>
          </h2>
          <p className="s2-desc-text">
            Now, I build digital experiences that do the same. We combine psychology, motion, and Webflow to create websites that don't just look good—they perform like magic.
          </p>
          
          <div className="s2-actions">
            <button className="btn-primary">Let's talk</button>
            <button className="btn-secondary">See the work</button>
          </div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="s2-marquee-container" ref={marqueeRef}>
        <div className="s2-marquee">
          <span>117+ PROJECTS DELIVERED ♣</span>
          <span>15+ COUNTRIES ♣</span>
          <span>GSAP MOTION ♣</span>
          <span>WEBFLOW AWARDS ♣</span>
          <span>117+ PROJECTS DELIVERED ♣</span>
          <span>15+ COUNTRIES ♣</span>
          <span>GSAP MOTION ♣</span>
          <span>WEBFLOW AWARDS ♣</span>
        </div>
      </div>
    </section>
  );
}
