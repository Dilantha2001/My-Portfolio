import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FAQ.css';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: "What services do you offer?", answer: "I specialize in full-stack web development, creating immersive 3D experiences, and building scalable, high-performance web applications tailored to your specific needs." },
  { question: "What is your typical process?", answer: "My process involves Discovery, Design, Development, and Deployment. I work closely with you at every step, ensuring the final product aligns perfectly with your vision and business goals." },
  { question: "How long does a project take?", answer: "Timelines vary heavily depending on the scope and complexity of the project. However, a typical full-stack web application takes between 4 to 8 weeks from initial discovery to final launch." },
  { question: "Do you offer ongoing support?", answer: "Yes, absolutely! I offer maintenance and support packages to ensure your application runs smoothly post-launch, including bug fixes, updates, and feature enhancements." },
  { question: "What technologies do you use?", answer: "I build modern web apps using React, Node.js, Express, MongoDB, Next.js, and specialized libraries like Three.js and GSAP for highly interactive frontend experiences." }
];

export default function FAQ() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useGSAP(() => {
    // Reveal the title
    gsap.from('.faq-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    // Reveal the items with stagger
    const items = gsap.utils.toArray('.faq-item');
    gsap.from(items, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });
  }, { scope: sectionRef });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
