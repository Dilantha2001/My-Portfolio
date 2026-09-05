import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Work.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'CTO BEES',
    desc: 'A boutique consulting firm uniting strategic foresight with technical depth — empowering businesses to transform, scale, and deliver exceptional customer experiences through the power of AI and a premium CTO-to-CMO partnership.',
    bg: '#f9d287', // Pastel yellow
    theme: 'dark-text',
    img: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=1200'
  },
  {
    id: '02',
    title: 'MANANA FILMS',
    desc: 'Since the inception of RealBiomes in 2020 our goal was always clear, to package beyond AAA visual fidelity together with intuitive technical solutions allowing anyone from students to seasoned developers to create amazing worlds.',
    bg: '#1c1c1c', // Dark grey
    theme: 'light-text',
    img: 'https://images.unsplash.com/photo-1481481312831-25ce5bd2827e?q=80&w=1200'
  },
  {
    id: '03',
    title: 'STUDIO LUNA',
    desc: 'Award-winning creative agency specializing in immersive web experiences and brand identity design for forward-thinking companies.',
    bg: '#e8dbd1', // Pastel beige
    theme: 'dark-text',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200'
  }
];

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
              <div className="work-number">({project.id})</div>
            </div>
            
            <div className="work-desc">
              {project.desc}
            </div>

            <div className="work-image-container">
              <div 
                className="work-image-inner" 
                style={{ backgroundImage: `url('${project.img}')` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
