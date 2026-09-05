import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FrontendWorks.css';

gsap.registerPlugin(ScrollTrigger);

const frontendProjects = [
  {
    id: 1,
    title: 'Comfy Medovik',
    description: 'An interactive frontend experience.',
    link: 'https://comfy-medovik-ee1f2a.netlify.app/', 
    iframeUrl: 'https://comfy-medovik-ee1f2a.netlify.app/'
  },
  {
    id: 2,
    title: 'Website Two (Placeholder)',
    description: 'An interactive platform with seamless animations.',
    link: '#', 
    iframeUrl: 'https://comfy-medovik-ee1f2a.netlify.app/' // Replaced with same for now until user provides the second one
  }
];

export default function FrontendWorks() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    // Only pin on desktop where it makes sense
    let mm = gsap.matchMedia();

    mm.add("(min-width: 993px)", () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftRef.current,
        pinSpacing: false,
      });
    });

    const cards = gsap.utils.toArray('.fw-project-card');
    cards.forEach((card) => {
      gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        }
      });
    });
    
    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section className="fw-section" ref={containerRef}>
      <div className="fw-container">
        <div className="fw-left" ref={leftRef}>
          <h2 className="fw-heading">Frontend<br/><span className="fw-orange-text">Works</span></h2>
          <p className="fw-subheading">A selection of recent web experiences.</p>
        </div>
        
        <div className="fw-right" ref={rightRef}>
          {frontendProjects.map((project) => (
            <div className="fw-project-card" key={project.id}>
              <div className="fw-iframe-container">
                <iframe 
                  src={project.iframeUrl} 
                  title={project.title} 
                  className="fw-iframe"
                  sandbox="allow-scripts allow-same-origin"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="fw-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="fw-external-link">Visit Website ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
