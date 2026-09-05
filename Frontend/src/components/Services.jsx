import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

import { PORTFOLIO_INFO } from '../portfolioData';

const images = [
  'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
  'https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=600'
];

const servicesData = PORTFOLIO_INFO.skills.map((category, index) => ({
  id: `0${index + 1}`,
  title: category.title,
  desc: `Extensive experience with ${category.skills.map(s => s.name).join(', ')}.`,
  img: images[index % images.length],
}));

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
      duration: 30, // Increased duration to reduce speed
      repeat: -1
    });
  }, { scope: containerRef });

  useGSAP(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll('.service-item');
    items.forEach((item, index) => {
      const desc = item.querySelector('.service-desc-wrapper');
      const img = item.querySelector('.service-image-wrapper');
      const title = item.querySelector('.service-name');
      const number = item.querySelector('.service-number');
      
      if (index === activeIndex) {
        gsap.to(desc, { height: 'auto', duration: 0.2, ease: 'power2.out' });
        gsap.to(img, { height: 150, opacity: 1, y: 0, duration: 0.2, ease: 'power2.out', delay: 0.1 });
        gsap.to(title, { color: '#ff6b4a', x: 10, duration: 0.2, ease: 'power2.out' });
        gsap.to(number, { color: '#ff6b4a', duration: 0.2, ease: 'power2.out' });
      } else {
        gsap.to(desc, { height: 0, duration: 0.1, ease: 'power2.out' });
        gsap.to(img, { height: 0, opacity: 0, y: 20, duration: 0.1, ease: 'power2.out' });
        gsap.to(title, { color: '#888888', x: 0, duration: 0.1, ease: 'power2.out' });
        gsap.to(number, { color: '#888888', duration: 0.1, ease: 'power2.out' });
      }
    });
  }, { dependencies: [activeIndex], scope: containerRef });

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="services-section" ref={containerRef} id="services">
      
      <div className="services-marquee" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div ref={marqueeRef} style={{ display: 'flex', width: 'fit-content' }}>
          <span>E-COMMERCE APPS &nbsp;&nbsp;-&nbsp;&nbsp; SOCIAL PLATFORMS &nbsp;&nbsp;-&nbsp;&nbsp; ADMIN DASHBOARDS &nbsp;&nbsp;-&nbsp;&nbsp; SAAS PRODUCTS &nbsp;&nbsp;-&nbsp;&nbsp; WEB PORTFOLIOS &nbsp;&nbsp;-&nbsp;&nbsp; CMS PLATFORMS &nbsp;&nbsp;-&nbsp;&nbsp; E-COMMERCE APPS &nbsp;&nbsp;-&nbsp;&nbsp; SOCIAL PLATFORMS &nbsp;&nbsp;-&nbsp;&nbsp; ADMIN DASHBOARDS &nbsp;&nbsp;-&nbsp;&nbsp; SAAS PRODUCTS &nbsp;&nbsp;-&nbsp;&nbsp; WEB PORTFOLIOS &nbsp;&nbsp;-&nbsp;&nbsp; CMS PLATFORMS &nbsp;&nbsp;-&nbsp;&nbsp; </span>
          <span>E-COMMERCE APPS &nbsp;&nbsp;-&nbsp;&nbsp; SOCIAL PLATFORMS &nbsp;&nbsp;-&nbsp;&nbsp; ADMIN DASHBOARDS &nbsp;&nbsp;-&nbsp;&nbsp; SAAS PRODUCTS &nbsp;&nbsp;-&nbsp;&nbsp; WEB PORTFOLIOS &nbsp;&nbsp;-&nbsp;&nbsp; CMS PLATFORMS &nbsp;&nbsp;-&nbsp;&nbsp; E-COMMERCE APPS &nbsp;&nbsp;-&nbsp;&nbsp; SOCIAL PLATFORMS &nbsp;&nbsp;-&nbsp;&nbsp; ADMIN DASHBOARDS &nbsp;&nbsp;-&nbsp;&nbsp; SAAS PRODUCTS &nbsp;&nbsp;-&nbsp;&nbsp; WEB PORTFOLIOS &nbsp;&nbsp;-&nbsp;&nbsp; CMS PLATFORMS &nbsp;&nbsp;-&nbsp;&nbsp; </span>
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
