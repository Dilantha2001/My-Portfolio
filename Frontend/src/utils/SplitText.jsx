import React from 'react';

export function SplitText({ children, className = '' }) {
  if (typeof children !== 'string') return <span className={className}>{children}</span>;

  const words = children.split(' ');

  return (
    <span className={`split-text-wrapper ${className}`} style={{ display: 'inline-block' }}>
      {words.map((word, wordIndex) => (
        <span 
          key={wordIndex} 
          className="word" 
          style={{ display: 'inline-block', whiteSpace: 'pre', overflow: 'hidden' }}
        >
          {word.split('').map((char, charIndex) => (
            <span 
              key={charIndex} 
              className="char" 
              style={{ display: 'inline-block', transform: 'translateY(100%)' }}
            >
              {char}
            </span>
          ))}
          {/* Add space after word unless it's the last word */}
          {wordIndex < words.length - 1 && <span> </span>}
        </span>
      ))}
    </span>
  );
}
