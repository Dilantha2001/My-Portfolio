import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ThreeParallaxGallery.css';

gsap.registerPlugin(ScrollTrigger);

const DEPTH_LAYERS = 5;
const IMAGES_PER_LAYER = 10;
const MAX_WIDTH = 100;
const MAX_HEIGHT = 100;
const TOTAL = DEPTH_LAYERS * IMAGES_PER_LAYER;

const LAYER_CONFIG = [
  { scale: 1.2, speed: 120, opacity: 1.0 },
  { scale: 1.0, speed: 80, opacity: 0.85 },
  { scale: 0.8, speed: 60, opacity: 0.7 },
  { scale: 0.6, speed: 40, opacity: 0.55 },
  { scale: 0.5, speed: 30, opacity: 0.4 }
];

const IMAGE_PATHS = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg'
];

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function fallbackTexture(layer) {
  const c = document.createElement("canvas");
  c.width = MAX_WIDTH;
  c.height = MAX_HEIGHT;
  const ctx = c.getContext("2d");
  ctx.fillStyle = ["#4a6572", "#344955", "#232f34", "#1c2529", "#0f1518"][layer];
  ctx.fillRect(0, 0, c.width, c.height);
  return new THREE.CanvasTexture(c);
}

export default function ThreeParallaxGallery() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading assets...");
  const [hideHint, setHideHint] = useState(false);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    gsap.from('.tech-stack-title', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
  }, { scope: sectionRef });

  useEffect(() => {
    if (!containerRef.current) return;

    let layers = [];
    for (let l = 0; l < DEPTH_LAYERS; l++) {
      layers[l] = [];
    }
    
    const textures = [];
    let loaded = 0;
    let lastTime = 0;
    
    let dragActive = false;
    let lastX = 0;
    let dragVelocity = 0;
    let speedFactor = 1;
    let animationFrameId;

    let shuffledImages = shuffleArray(IMAGE_PATHS);
    let currentImageIndex = 0;

    function getNextRandomImage() {
      if (currentImageIndex >= shuffledImages.length) {
        shuffledImages = shuffleArray(IMAGE_PATHS);
        currentImageIndex = 0;
      }
      const image = shuffledImages[currentImageIndex];
      currentImageIndex++;
      return image;
    }

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    
    const container = containerRef.current;
    container.appendChild(renderer.domElement);
    
    let camera;

    function resize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      
      if (!camera) {
        camera = new THREE.OrthographicCamera(0, w, h, 0, -1000, 1000);
        camera.position.z = 10;
      } else {
        camera.right = w;
        camera.top = h;
        camera.updateProjectionMatrix();
      }
      
      for (const layer of layers) {
        if (!layer) continue;
        for (const s of layer) {
          scene.remove(s);
          if (s.material.map) s.material.map.dispose();
          s.material.dispose();
          s.geometry.dispose();
        }
      }
      layers = [];
      for (let l = 0; l < DEPTH_LAYERS; l++) layers[l] = [];
      if (textures.length === DEPTH_LAYERS * IMAGES_PER_LAYER) fillViewport();
    }

    window.addEventListener("resize", resize);
    resize();

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";

    function onLoaded(tex) {
      textures.push(tex);
      loaded++;
      const p = Math.round((loaded / TOTAL) * 100);
      setProgress(p);
      setLoadingText(`Loading ${p}%`);
      if (loaded === TOTAL) initSprites();
    }

    function loadAll() {
      for (let l = 0; l < DEPTH_LAYERS; l++) {
        for (let i = 0; i < IMAGES_PER_LAYER; i++) {
          const path = getNextRandomImage();
          loader.load(path, tex => onLoaded(tex), undefined, () => onLoaded(fallbackTexture(l)));
        }
      }
    }

    function initSprites() {
      fillViewport();
      setIsLoaded(true);
      lastTime = performance.now();
      animate();
    }

    const lastUsedTextures = {
      0: [], 1: [], 2: [], 3: [], 4: []
    };

    function addSprite(layerIndex, startX) {
      const cfg = LAYER_CONFIG[layerIndex];
      
      const recent = lastUsedTextures[layerIndex];
      let availableIndices = [];
      for (let i = 0; i < textures.length; i++) {
        if (!recent.includes(i)) availableIndices.push(i);
      }
      if (availableIndices.length === 0) {
        availableIndices = [Math.floor(Math.random() * textures.length)];
      }
      
      const texIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      recent.push(texIndex);
      if (recent.length > 15) { // remember last 15 to ensure high variety
        recent.shift();
      }
      
      const texture = textures[texIndex] || fallbackTexture(layerIndex);
      const mat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: cfg.opacity
      });
      const sprite = new THREE.Sprite(mat);
      const image = texture.image;
      
      let width = MAX_WIDTH;
      let height = MAX_HEIGHT;
      if (image && image.width && image.height) {
        const ratio = image.width / image.height;
        if (ratio > 1) {
          width = MAX_WIDTH;
          height = MAX_WIDTH / ratio;
        } else {
          height = MAX_HEIGHT;
          width = MAX_HEIGHT * ratio;
        }
      }
      
      const sizeVar = rand(0.85, 1.15);
      const w = width * cfg.scale * sizeVar;
      const h = height * cfg.scale * sizeVar;
      const spacing = w * rand(0.5, 0.9);
      
      sprite.scale.set(w, h, 1);
      sprite.position.set(startX + w / 2 + spacing, rand(h / 2, container.clientHeight - h / 2), -layerIndex * 50);
      
      const speedVariation = rand(0.45, 1.15);
      sprite.userData = {
        speed: cfg.speed * speedVariation,
        width: w,
        height: h,
        seed: rand(0, 1000),
        baseY: sprite.position.y,
        opacity: cfg.opacity
      };
      
      layers[layerIndex].push(sprite);
      scene.add(sprite);
      return sprite;
    }

    function cleanupSprites() {
      if (!container) return;
      const w = container.clientWidth;
      const bufferZone = w * 0.5;
      for (let l = 0; l < DEPTH_LAYERS; l++) {
        if (!layers[l] || layers[l].length === 0) continue;
        const sprites = layers[l];
        const maxSprites = IMAGES_PER_LAYER + 3;
        if (sprites.length > maxSprites) {
          for (let i = sprites.length - 1; i >= 0; i--) {
            const s = sprites[i];
            const ud = s.userData;
            let shouldRemove = false;
            if (speedFactor > 0) {
              shouldRemove = (s.position.x - ud.width / 2) > (w + bufferZone);
            } else if (speedFactor < 0) {
              shouldRemove = (s.position.x + ud.width / 2) < (-bufferZone);
            }
            if (shouldRemove) {
              scene.remove(s);
              if (s.material.map) s.material.map.dispose();
              s.material.dispose();
              sprites.splice(i, 1);
              if (sprites.length <= maxSprites) break;
            }
          }
        }
      }
    }

    function fillViewport() {
      if (!container) return;
      const w = container.clientWidth;
      for (let l = 0; l < DEPTH_LAYERS; l++) {
        let sprites = layers[l];
        if (!sprites) continue;
        let rightMost = sprites.length > 0 
          ? Math.max(...sprites.map(s => s.position.x + s.userData.width / 2)) 
          : -container.clientWidth * 1.2;
          
        while (rightMost < w) {
          addSprite(l, rightMost);
          sprites = layers[l];
          rightMost = Math.max(...sprites.map(s => s.position.x + s.userData.width / 2));
        }
      }
    }

    function animate() {
      if (!container) return;
      const now = performance.now();
      const dt = Math.min(40, now - lastTime) / 1000;
      lastTime = now;
      const w = container.clientWidth;
      
      // Decay drag velocity
      dragVelocity *= 0.92;
      
      // Constant auto-scroll speed (-2.5 makes it move left fairly quickly)
      // dragVelocity allows the user to flick it faster or reverse it temporarily
      speedFactor = -2.5 + dragVelocity;
      
      if (Math.random() < 0.01) {
        cleanupSprites();
      }
      
      for (const sprites of layers) {
        if (!sprites || !sprites.length) continue;
        for (const s of sprites) {
          const ud = s.userData;
          // Calculate movement delta
          s.position.x += ud.speed * speedFactor * dt;
          
          if (speedFactor > 0 && s.position.x - ud.width / 2 > w) {
            s.position.x = -ud.width / 2 - rand(0, ud.width);
          } else if (speedFactor < 0 && s.position.x + ud.width / 2 < 0) {
            s.position.x = w + ud.width / 2 + rand(0, ud.width);
          }
          
          const pulse = 1 + Math.sin(now * 0.001 + ud.seed) * 0.015;
          s.scale.x = ud.width * pulse;
          s.scale.y = ud.height * pulse;
          s.position.y = ud.baseY + Math.sin(now * 0.001 + ud.seed) * 5;
          s.material.opacity = ud.opacity;
        }
      }
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }

    loadAll();

    // Event Listeners for Interaction
    function getX(e) {
      return e.touches ? e.touches[0].clientX : e.clientX;
    }

    const onMouseDown = (e) => {
      dragActive = true;
      lastX = getX(e);
    };

    const onMouseMove = (e) => {
      if (!dragActive) return;
      const x = getX(e);
      const dx = x - lastX;
      lastX = x;
      dragVelocity = dx * 0.02;
    };

    const onMouseUp = () => {
      dragActive = false;
    };

    const onTouchStart = (e) => {
      // Don't prevent default here to allow normal page scrolling when not interacting horizontally
      dragActive = true;
      lastX = getX(e);
    };

    const onTouchMove = (e) => {
      if (!dragActive) return;
      const x = getX(e);
      const dx = x - lastX;
      lastX = x;
      dragVelocity = dx * 0.02;
    };

    const onTouchEnd = () => {
      dragActive = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    
    // Using passive touch events so normal page scrolling is never interrupted
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onTouchEnd);
      
      if (container) {
        container.removeEventListener("mousedown", onMouseDown);
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      for (const layer of layers) {
        if (!layer) continue;
        for (const s of layer) {
          scene.remove(s);
          if (s.material.map) s.material.map.dispose();
          s.material.dispose();
          s.geometry.dispose();
        }
      }
      textures.forEach(tex => tex.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <section className="tech-stack-section" ref={sectionRef}>
      <div className="tech-stack-header">
        <h2 className="tech-stack-title">THE ARSENAL</h2>
      </div>
      <div className="three-parallax-gallery">
        <div id="three-container" ref={containerRef}></div>
        
        {!isLoaded && (
          <div className="three-loading" id="loading">
            <div id="loadingText">{loadingText}</div>
            <div id="progressBar">
              <div id="progressFill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}

        {isLoaded && !hideHint && (
          <>
            <div id="three-ui" className="three-hint">
              Tech Stack 
            </div>
            <div className="three-infos" onClick={() => setHideHint(true)}>
              drag | arrows ← → | Click me to hide.
            </div>
          </>
        )}
      </div>
    </section>
  );
}
