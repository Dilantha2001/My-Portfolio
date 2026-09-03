import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: '01',
    title: 'Webflow Development',
    desc: 'I build every Webflow project from scratch using BEM class naming, custom GSAP animations, and a CMS architecture designed to scale. Whether it\'s a marketing site, a multi-page platform, or a complex corporate build - the code is clean, the interactions are smooth, and the site performs.',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600',
  },
  {
    id: '02',
    title: 'UI/UX Design',
    desc: 'Intuitive user experiences, scalable design systems, and pixel-perfect interfaces that balance business goals with user needs.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600',
  },
  {
    id: '03',
    title: 'Motion & Animation',
    desc: 'From subtle micro-interactions to advanced product animations, every transition is crafted to improve usability and reinforce your brand.',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600',
  },
  {
    id: '04',
    title: 'Marketing Strategy',
    desc: 'Strategic direction and positioning to ensure your digital presence connects with your target audience effectively.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
  },
  {
    id: '05',
    title: 'Copywriting',
    desc: 'Compelling narratives and clear messaging that speak directly to your customers and drive conversions.',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=600',
  },
];

export default function Services() {
  const containerRef = useRef();
  const listRef = useRef();
  const marqueeRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    // Reveal list items on scroll safely
    gsap.fromTo('.service-item', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
        },
      }
    );

    // Infinite Marquee
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 10,
      repeat: -1
    });
  }, { scope: containerRef });

  useGSAP(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll('.service-item');
    items.forEach((item, index) => {
      const desc = item.querySelector('.service-desc-wrapper');
      const img = item.querySelector('.service-image-wrapper');
      
      if (index === activeIndex) {
        gsap.to(desc, { height: 'auto', duration: 0.4, ease: 'power2.out' });
        gsap.to(img, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.1 });
      } else {
        gsap.to(desc, { height: 0, duration: 0.4, ease: 'power2.out' });
        gsap.to(img, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out' });
      }
    });
  }, { dependencies: [activeIndex], scope: containerRef });

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="services-section" ref={containerRef} id="services">
      
      <div className="services-marquee" style={{ overflow: 'hidden' }}>
        <div ref={marqueeRef} style={{ display: 'flex', width: 'fit-content' }}>
          <span>WHAT I DO <span className="heart">❤️</span> WHAT I DO <span className="heart">❤️</span> WHAT I DO <span className="heart">❤️</span></span>
          <span>WHAT I DO <span className="heart">❤️</span> WHAT I DO <span className="heart">❤️</span> WHAT I DO <span className="heart">❤️</span></span>
          <span>WHAT I DO <span className="heart">❤️</span> WHAT I DO <span className="heart">❤️</span> WHAT I DO <span className="heart">❤️</span></span>
          <span>WHAT I DO <span className="heart">❤️</span> WHAT I DO <span className="heart">❤️</span> WHAT I DO <span className="heart">❤️</span></span>
        </div>
      </div>
      
      <div className="services-list" ref={listRef}>
        {servicesData.map((service, index) => (
          <div 
            className={`service-item ${activeIndex === index ? 'active' : ''}`}
            key={service.id}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className="service-number">[ {service.id} ]</div>
            
            <div className="service-content">
              <h3 className="service-name">{service.title}</h3>
              <div className="service-desc-wrapper">
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>

            <div className="service-image-wrapper">
              <div className="service-image" style={{ backgroundImage: `url('${service.img}')` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
