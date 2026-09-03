import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const processRef = useRef();
  const stepsRef = useRef();

  useGSAP(() => {
    gsap.from(stepsRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: processRef.current,
        start: 'top 60%',
      },
    });
  }, { scope: processRef });

  return (
    <section className="process-section" ref={processRef} id="process">
      <div className="process-container">
        <h2 className="process-title">THE PROCESS</h2>
        <div className="process-steps" ref={stepsRef}>
          <div className="process-step">
            <div className="step-num">01</div>
            <h3>Discovery</h3>
            <p>Understanding the brand, users, and business goals to set the right foundation.</p>
          </div>
          <div className="process-step">
            <div className="step-num">02</div>
            <h3>Design</h3>
            <p>Crafting intuitive interfaces with high-end typography, layout, and visual direction.</p>
          </div>
          <div className="process-step">
            <div className="step-num">03</div>
            <h3>Development</h3>
            <p>Translating design into seamless code using Webflow and advanced GSAP motion.</p>
          </div>
          <div className="process-step">
            <div className="step-num">04</div>
            <h3>Launch</h3>
            <p>Rigorous testing, optimization, and seamless deployment of the final product.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
