import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef();

  return (
    <section className="process-section" ref={containerRef}>
      {/* Empty white section for the video transition */}
    </section>
  );
}
