import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PhraseScroll.css';

gsap.registerPlugin(ScrollTrigger);

const orangeColor = { main: '#FF9500', shades: ['#FFB347', '#FFC04C', '#FF8C00', '#E67E22'] };
const blackColor = { main: '#000000', shades: ['#333333', '#555555', '#111111', '#000000'] };

export default function PhraseScroll() {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const svgRef = useRef(null);
  
  const phrase = "Have a project in mind?\nLet’s build it.";
  const letters = phrase.split('');
  
  const wordsToHighlight = ["project", "mind", "build"];
  const highlightIndices = new Set();
  wordsToHighlight.forEach(word => {
    let startIndex = phrase.toLowerCase().indexOf(word.toLowerCase());
    while(startIndex !== -1) {
      for(let i = 0; i < word.length; i++) {
        highlightIndices.add(startIndex + i);
      }
      startIndex = phrase.toLowerCase().indexOf(word.toLowerCase(), startIndex + 1);
    }
  });

  const createSVG = type => document.createElementNS('http://www.w3.org/2000/svg', type);

  const addTri = (x0, y0, shade, textSize) => {
    const tri = createSVG('polygon');
    const a = Math.random();
    const a2 = a + (-0.2 + Math.random()*0.4);
    const r = textSize * 0.52;
    const r2 = r + textSize * Math.random() * 0.2;
    const x = x0 + r * Math.cos(2 * Math.PI * a);
    const y = y0 + r * Math.sin(2 * Math.PI * a);
    const x2 = x0 + r2 * Math.cos(2 * Math.PI * a2);
    const y2 = y0 + r2 * Math.sin(2 * Math.PI * a2);
    const triSize = textSize * 0.1;
    const scale = 0.3 + Math.random() * 0.7;
    const offset = triSize * scale;
    tri.setAttribute('points', `0,0 ${triSize*2},0 ${triSize},${triSize*2}`);
    tri.style.fill = shade;
    svgRef.current.appendChild(tri);
    
    gsap.fromTo(tri, 
      { rotation: Math.random()*360, scale: scale, x: x-offset, y: y-offset, opacity: 1 }, 
      { rotation: "+=180", x: x2-offset, y: y2-offset, opacity: 0, duration: 0.6, ease: 'power1.inOut', onComplete: () => {
        if (svgRef.current && svgRef.current.contains(tri)) {
          svgRef.current.removeChild(tri);
        }
      }}
    );
  };

  const addCirc = (x0, y0, textSize) => {
    const circ = createSVG('circle');
    const a = Math.random();
    const r = textSize * 0.52;
    const r2 = r + textSize;
    const x = x0 + r * Math.cos(2 * Math.PI * a);
    const y = y0 + r * Math.sin(2 * Math.PI * a);
    const x2 = x0 + r2 * Math.cos(2 * Math.PI * a);
    const y2 = y0 + r2 * Math.sin(2 * Math.PI * a);
    const circSize = textSize * 0.05 * Math.random();
    circ.setAttribute('r', circSize);
    circ.style.fill = '#eee';
    svgRef.current.appendChild(circ);
    
    gsap.fromTo(circ, 
      { x: x-circSize, y: y-circSize, opacity: 1 }, 
      { x: x2-circSize, y: y2-circSize, opacity: 0, duration: 0.6, ease: 'power1.inOut', onComplete: () => {
        if (svgRef.current && svgRef.current.contains(circ)) {
          svgRef.current.removeChild(circ);
        }
      }}
    );
  };

  const addDecor = (letterEl, color) => {
    if (!letterEl) return;
    const x0 = letterEl.offsetLeft + letterEl.offsetWidth / 2;
    const y0 = letterEl.offsetTop + letterEl.offsetHeight / 2;
    const textSize = letterEl.offsetHeight || 100;
    
    const shade = color.shades[Math.floor(Math.random()*4)];
    for (let i = 0; i < 8; i++) addTri(x0, y0, shade, textSize);
    for (let i = 0; i < 8; i++) addCirc(x0, y0, textSize);
  };

  useGSAP(() => {
    const letterEls = gsap.utils.toArray('.phrase-letter');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: 1,
        pin: true
      }
    });

    letterEls.forEach((letter, i) => {
      if (letter.innerText.trim() === '') {
        tl.set(letter, { opacity: 1, scale: 1 }, i * 0.1);
        return; 
      }
      const originalIndex = parseInt(letter.getAttribute('data-index'), 10);
      const isHighlighted = highlightIndices.has(originalIndex);
      const targetColor = isHighlighted ? orangeColor : blackColor;
      
      const textSize = letter.offsetHeight || 100;
      const yOffset = (0.5 + Math.random() * 0.5) * textSize;
      const rotation = -50 + Math.random() * 100;
      
      tl.fromTo(letter, 
        { scale: 0, opacity: 0 }, 
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1, 
          ease: 'back.out(1.7)',
          onStart: () => {
            letter.style.color = targetColor.main;
            addDecor(letter, targetColor);
            
            // Independent unscrubbed animations for bounce/rotation so they look natural
            gsap.to(letter, { y: -yOffset, duration: 0.2, ease: 'power3.inOut' });
            gsap.to(letter, { y: 0, duration: 0.2, ease: 'power3.inOut', delay: 0.2 });
            gsap.to(letter, { rotation: rotation, duration: 0.2, ease: 'power3.inOut' });
            gsap.to(letter, { rotation: 0, duration: 0.2, ease: 'power3.inOut', delay: 0.2 });
          }
        },
        i * 0.2 // stagger offset in timeline
      );
    });

  }, { scope: containerRef });

  return (
    <section className="phrase-scroll-section" ref={containerRef}>
      <div className="phrase-scroll-container" ref={textContainerRef}>
        <svg ref={svgRef} className="phrase-svg" />
        <h1 className="phrase-scroll-text">
          {letters.map((char, i) => {
            if (char === '\n') return <br key={i} />;
            return (
              <span 
                key={i} 
                className="phrase-letter" 
                data-index={i}
                style={{ display: 'inline-block', whiteSpace: 'pre', opacity: 0 }}
              >
                {char}
              </span>
            );
          })}
        </h1>
      </div>
    </section>
  );
}
