import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: footerRef });

  return (
    <footer className="footer-section" ref={footerRef} id="contact">
      <div className="footer-content">
        <h2 className="footer-cta" ref={textRef}>LET'S TALK</h2>
        <p className="footer-subtext">Have a project in mind? Let's build something great together.</p>
        <a href="mailto:hello@nbnzia.com" className="footer-email">hello@nbnzia.com</a>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-logo">NBNZIA</div>
        <div className="footer-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Dribbble</a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
