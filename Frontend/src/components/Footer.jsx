import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    // Simple fade-up for footer elements
    const elements = footerRef.current.querySelectorAll('.footer-heading, .footer-form, .footer-links-area, .footer-bottom');
    
    gsap.from(elements, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
      },
    });

  }, { scope: footerRef });

  const HoverText = ({ text, isHighlight }) => (
    <span className={isHighlight ? "highlight" : ""}>
      {text.split('').map((char, i) => (
        <span 
          key={i} 
          className={`hover-char ${isHighlight ? 'hover-char-highlight' : 'hover-char-normal'}`}
          style={{ whiteSpace: 'pre' }}
        >
          {char}
        </span>
      ))}
    </span>
  );

  return (
    <section className="footer-section" ref={footerRef} id="contact">
      <div className="footer-container">
        
        <h1 
          className="footer-heading"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HoverText text="READY FOR " isHighlight={true} /> 
          <div className="heading-inline-img-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200" 
              alt="Portrait 1" 
              className={`heading-inline-img ${isHovered ? 'img-hidden' : 'img-visible'}`} 
            /> 
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200" 
              alt="Portrait 2" 
              className={`heading-inline-img ${isHovered ? 'img-visible' : 'img-hidden'}`} 
            /> 
          </div>
          <HoverText text=" YOUR" isHighlight={false} /><br />
          <HoverText text="PRESTIGE" isHighlight={true} />
          <HoverText text=" MOMENT?" isHighlight={false} />
        </h1>

        <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="" />
          </div>
          <button type="submit" className="submit-btn">
            Submit <span className="arrow">↵</span>
          </button>
        </form>

        <div className="footer-links-area">
          <div className="footer-socials">
            <span className="label">Follow</span>
            <div className="social-icons">
              <a href="#" className="icon">W</a>
              <a href="#" className="icon">IG</a>
              <a href="#" className="icon">IN</a>
            </div>
          </div>
          <div className="footer-contact">
            <span className="label">Write</span>
            <a href="mailto:hey@nbnzia.com" className="contact-email">HEY@NBNZIA.COM</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© YEVHENII NEBENZIA, 2026</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

      </div>
    </section>
  );
}
