import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Work.css';

gsap.registerPlugin(ScrollTrigger);

import { PORTFOLIO_INFO } from '../portfolioData';

const projectColors = [
  { bg: '#f9d287', theme: 'dark-text' },
  { bg: '#1c1c1c', theme: 'light-text' },
  { bg: '#e8dbd1', theme: 'dark-text' },
  { bg: '#4a6572', theme: 'light-text' },
  { bg: '#d4e1e8', theme: 'dark-text' },
  { bg: '#2b2d42', theme: 'light-text' },
  { bg: '#8d99ae', theme: 'dark-text' },
  { bg: '#edf2f4', theme: 'dark-text' },
];

const projects = PORTFOLIO_INFO.projects.map((proj, i) => ({
  ...proj,
  bg: projectColors[i % projectColors.length].bg,
  theme: projectColors[i % projectColors.length].theme,
  displayId: i < 9 ? `0${i + 1}` : `${i + 1}`
}));

export default function Work() {
  const containerRef = useRef();

  useGSAP(() => {
    const panels = gsap.utils.toArray('.work-panel');
    
    panels.forEach((panel, i) => {
      // Pin each panel so they stack on top of each other
      // We do NOT pin the last panel, so that it naturally scrolls up and pulls the next sections (Gallery, Footer) with it natively.
      if (i < panels.length - 1) {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        });
      }

      // Parallax image inside each panel
      const innerImg = panel.querySelector('.work-image-inner');
      gsap.to(innerImg, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Animate text elements on enter
      const title = panel.querySelector('.work-title');
      const number = panel.querySelector('.work-number');
      const desc = panel.querySelector('.work-desc');
      const imgContainer = panel.querySelector('.work-image-container');

      gsap.from([title, number, desc, imgContainer], {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: panel,
          start: 'top 70%',
        }
      });

      // Scale down previous panel when the current one scrolls over it
      if (i > 0) {
        gsap.to(panels[i - 1], {
          scale: 0.92,
          opacity: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'top top',
            scrub: true
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section className="work-section" ref={containerRef} id="work">
      {projects.map((project, i) => (
        <div 
          className={`work-panel ${project.theme}`} 
          key={project.id}
          style={{ backgroundColor: project.bg, zIndex: i }}
        >
          <div className="work-panel-inner">
            <div className="work-panel-header">
              <h2 className="work-title">{project.title}</h2>
              <div className="work-number">({project.displayId})</div>
            </div>
            
            <div className="work-desc">
              <p>{project.description}</p>
              <div className="work-tags" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                {project.tags.map(tag => (
                   <span key={tag} style={{ padding: '0.3rem 0.8rem', border: '1px solid currentColor', borderRadius: '1.5rem', fontSize: '0.85rem' }}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="work-image-container">
              <div 
                className="work-image-inner" 
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
