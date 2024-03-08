import React, { useState } from 'react';
import './ButtonsPage.css'; 
import './Buttons.css'; 

const ButtonsPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(null);

  const buttons = [
    {
        name: 'Radiant Ripple',
        className: 'radiant-ripple',
        cssCode: `
    .radiant-ripple {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .radiant-ripple:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: ripple 3s linear infinite;
    }
    
    @keyframes ripple {
      0% {
        border-color: #ff0000;
      }
      50% {
        border-color: #00ff00;
      }
      100% {
        border-color: #ff0000;
      }
    }`
      },
      {
        name: 'Cosmic Crackle',
        className: 'cosmic-crackle',
        cssCode: `
    .cosmic-crackle {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .cosmic-crackle:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: crackle 3s linear infinite;
    }
    
    @keyframes crackle {
      0% {
        border-color: #ffff00;
      }
      50% {
        border-color: #00ffff;
      }
      100% {
        border-color: #ffff00;
      }
    }`
      },
      {
        name: 'Spectrum Spark',
        className: 'spectrum-spark',
        cssCode: `
    .spectrum-spark {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .spectrum-spark:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: spark 3s linear infinite;
    }
    
    @keyframes spark {
      0% {
        border-color: #00ff00;
      }
      50% {
        border-color: #ff00ff;
      }
      100% {
        border-color: #00ff00;
      }
    }`
      },
      {
        name: 'Prism Pulse',
        className: 'prism-pulse',
        cssCode: `
    .prism-pulse {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .prism-pulse:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: pulse 3s linear infinite;
    }
    
    @keyframes pulse {
      0% {
        border-color: #00ffff;
      }
      50% {
        border-color: #ff00ff;
      }
      100% {
        border-color: #00ffff;
      }
    }`
      },
      {
        name: 'Aurora Aura',
        className: 'aurora-aura',
        cssCode: `
    .aurora-aura {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .aurora-aura:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: aura 3s linear infinite;
    }
    
    @keyframes aura {
      0% {
        border-color: #ff00ff;
      }
      50% {
        border-color: #ffff00;
      }
      100% {
        border-color: #ff00ff;
      }
    }`
      },
      {
        name: 'Meteoric Glow',
        className: 'meteoric-glow',
        cssCode: `
    .meteoric-glow {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .meteoric-glow:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: meteoric 3s linear infinite;
    }
    
    @keyframes meteoric {
      0% {
        border-color: #ffff00;
      }
      50% {
        border-color: #ff0000;
      }
      100% {
        border-color: #ffff00;
      }
    }`
      },
      {
        name: 'Iridescent Illusion',
        className: 'iridescent-illusion',
        cssCode: `
    .iridescent-illusion {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .iridescent-illusion:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: illusion 3s linear infinite;
    }
    
    @keyframes illusion {
      0% {
        border-color: #00ffff;
      }
      50% {
        border-color: #ffff00;
      }
      100% {
        border-color: #00ffff;
      }
    }`
      },
      {
        name: 'Stargazer\'s Stripes',
        className: 'stargazers-stripes',
        cssCode: `
    .stargazers-stripes {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .stargazers-stripes:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: stripes 3s linear infinite;
    }
    
    @keyframes stripes {
      0% {
        border-color: #ff00ff;
      }
      50% {
        border-color: #ffff00;
      }
      100% {
        border-color: #ff00ff;
      }
    }`
      },
      {
        name: 'Mystic Mirage',
        className: 'mystic-mirage',
        cssCode: `
    .mystic-mirage {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .mystic-mirage:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: mirage 3s linear infinite;
    }
    
    @keyframes mirage {
      0% {
        border-color: #ffff00;
      }
      50% {
        border-color: #ff0000;
      }
      100% {
        border-color: #ffff00;
      }
    }`
      },
    {
        name: 'Electric Edge',
        className: 'electric-edge',
        cssCode: `
    .electric-edge {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .electric-edge:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: electric 3s linear infinite;
    }
    
    @keyframes electric {
      0% {
        border-color: #fff;
      }
      50% {
        border-color: #00ffff;
      }
      100% {
        border-color: #fff;
      }
    }`
      },
      {
        name: 'Neon Nebula',
        className: 'neon-nebula',
        cssCode: `
    .neon-nebula {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .neon-nebula:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: neon 3s linear infinite;
    }
    
    @keyframes neon {
      0% {
        border-color: #00ff00;
      }
      50% {
        border-color: #ff00ff;
      }
      100% {
        border-color: #00ff00;
      }
    }`
      },
      {
        name: 'Psychedelic Pulse',
        className: 'psychedelic-pulse',
        cssCode: `
    .psychedelic-pulse {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .psychedelic-pulse:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: psychedelic 3s linear infinite;
    }
    
    @keyframes psychedelic {
      0% {
        border-color: #ff00ff;
      }
      50% {
        border-color: #00ffff;
      }
      100% {
        border-color: #ff00ff;
      }
    }`
      },
      {
        name: 'Flickering Frost',
        className: 'flickering-frost',
        cssCode: `
    .flickering-frost {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .flickering-frost:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: frost 3s linear infinite;
    }
    
    @keyframes frost {
      0% {
        border-color: #00ffff;
      }
      50% {
        border-color: #0000ff;
      }
      100% {
        border-color: #00ffff;
      }
    }`
      },
      {
        name: 'Thunderbolt Border',
        className: 'thunderbolt-border',
        cssCode: `
    .thunderbolt-border {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .thunderbolt-border:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: thunderbolt 3s linear infinite;
    }
    
    @keyframes thunderbolt {
      0% {
        border-color: #ffff00;
      }
      50% {
        border-color: #ff0000;
      }
      100% {
        border-color: #ffff00;
      }
    }`
      },
      {
        name: 'Galactic Glow',
        className: 'galactic-glow',
        cssCode: `
    .galactic-glow {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .galactic-glow:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: galactic 3s linear infinite;
    }
    
    @keyframes galactic {
      0% {
        border-color: #00ff00;
      }
      50% {
        border-color: #ffff00;
      }
      100% {
        border-color: #00ff00;
      }
    }`
      },
      {
        name: 'Electric Elegance',
        className: 'electric-elegance',
        cssCode: `
    .electric-elegance {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .electric-elegance:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: electricElegance 3s linear infinite;
    }
    
    @keyframes electricElegance {
      0% {
        border-color: #ff00ff;
      }
      50% {
        border-color: #ffff00;
      }
      100% {
        border-color: #ff00ff;
      }
    }`
      },
      {
        name: 'Luminous Lines',
        className: 'luminous-lines',
        cssCode: `
    .luminous-lines {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .luminous-lines:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: luminous 3s linear infinite;
    }
    
    @keyframes luminous {
      0% {
        border-color: #ffff00;
      }
      50% {
        border-color: #00ffff;
      }
      100% {
        border-color: #ffff00;
      }
    }`
      },
      {
        name: 'Blazing Border',
        className: 'blazing-border',
        cssCode: `
    .blazing-border {
      background-color: #000;
      color: #fff;
      border: 2px solid transparent;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .blazing-border:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      animation: blazing 3s linear infinite;
    }
    
    @keyframes blazing {
      0% {
        border-color: #ffff00;
      }
      50% {
        border-color: #ff0000;
      }
      100% {
        border-color: #ffff00;
      }
    }`
      },
    {
        name: 'Glowing Galaxy',
        className: 'glowing-galaxy',
        cssCode: `
    .glowing-galaxy {
      background-color: #000;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      animation: glow 3s ease-in-out infinite;
    }
    
    .glowing-galaxy:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      animation: pulse 2s linear infinite;
    }
    
    @keyframes glow {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      50% {
        transform: scale(1.2);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0.5;
      }
    }`},
      {
        name: 'Enchanted Forest',
        className: 'enchanted-forest',
        cssCode: `
    .enchanted-forest {
      background-color: #228b22;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .enchanted-forest:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      animation: leaves 2s linear infinite;
    }
    
    @keyframes leaves {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      50% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }`},
      {
        name: 'Shooting Star',
        className: 'shooting-star',
        cssCode: `
    .shooting-star {
      background-color: #87ceeb;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .shooting-star:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0.3) 100%);
      border-radius: 50%;
      animation: shooting 2s ease-in-out infinite;
    }
    
    @keyframes shooting {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        transform: translate(-50%, -50%) scale(1.5);
      }
    }`},
      {
        name: 'Flickering Flame',
        className: 'flickering-flame',
        cssCode: `
    .flickering-flame {
      background-color: #ff7f50;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .flickering-flame:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,165,0,0) 0%, rgba(255,165,0,0.3) 80%, rgba(255,165,0,0.3) 100%);
      border-radius: 50%;
      animation: flicker 1s linear infinite;
    }
    
    @keyframes flicker {
      0% {
        opacity: 0.8;
      }
      100% {
        opacity: 1;
      }
    }`},
      {
        name: 'Glowing Ember',
        className: 'glowing-ember',
        cssCode: `
    .glowing-ember {
      background-color: #800000;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .glowing-ember:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 80%, rgba(255,255,255,0.5) 100%);
      border-radius: 50%;
      animation: glowEmber 2s linear infinite;
    }
    
    @keyframes glowEmber {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }`},
      {
        name: 'Golden Sunset',
        className: 'golden-sunset',
        cssCode: `
    .golden-sunset {
      background-color: #ffd700;
      color: #000;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .golden-sunset:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(to right, rgba(255,215,0,0) 0%, rgba(255,215,0,0.5) 50%, rgba(255,215,0,0) 100%);
      border-radius: 50%;
      animation: sunRise 3s linear infinite;
    }
    
    @keyframes sunRise {
      0% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-50%) rotate(180deg);
      }
      100% {
        transform: translateY(0) rotate(360deg);
      }
    }`},
      {
        name: 'Vibrant Rainbow',
        className: 'vibrant-rainbow',
        cssCode: `
    .vibrant-rainbow {
      background: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      animation: rainbow 5s linear infinite;
    }
    
    @keyframes rainbow {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }`},
      {
        name: 'Dazzling Diamond',
        className: 'dazzling-diamond',
        cssCode: `
    .dazzling-diamond {
      background-color: #fff;
      color: #000;
      border: 2px solid #fff;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .dazzling-diamond:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(to right, #00ced1, #9400d3, #ff1493, #ff8c00, #ffd700, #32cd32, #00ced1);
      border-radius: 10px;
      animation: diamondSparkle 2s linear infinite;
    }
    
    @keyframes diamondSparkle {
      0% {
        background-position: -200% 50%;
      }
      100% {
        background-position: 200% 50%;
      }
    }`},
      {
        name: 'Radiant Rainbow',
        className: 'radiant-rainbow',
        cssCode: `
    .radiant-rainbow {
      background: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      animation: radiant 5s linear infinite;
    }
    
    @keyframes radiant {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }`},
      {
        name: 'Flickering Firefly',
        className: 'flickering-firefly',
        cssCode: `
    .flickering-firefly {
      background-color: #228b22;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .flickering-firefly:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: flicker 2s linear infinite;
    }
    
    @keyframes flicker {
      0%, 100% {
        transform: scale(1);
        opacity: 0.5;
      }
      50% {
        transform: scale(1.2);
        opacity: 1;
      }
    }`},
    {
        name: 'Sparkling Diamond',
        className: 'sparkling-diamond',
        cssCode: `
    .sparkling-diamond {
      background-color: #e6e6e6;
      color: #000;
      border: 2px solid #e6e6e6;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .sparkling-diamond:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.8);
      animation: sparkle 2s linear infinite;
    }
    
    @keyframes sparkle {
      0% {
        transform: translateX(-50%);
        opacity: 0;
      }
      50% {
        transform: translateX(50%);
        opacity: 1;
      }
      100% {
        transform: translateX(-50%);
        opacity: 0;
      }
    }`},
      {
        name: 'Fluttering Butterfly',
        className: 'fluttering-butterfly',
        cssCode: `
    .fluttering-butterfly {
      background-color: #87ceeb;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .fluttering-butterfly:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      animation: flutter 3s ease-in-out infinite;
    }
    
    @keyframes flutter {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      50% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }`},
      {
        name: 'Sizzling Sun',
        className: 'sizzling-sun',
        cssCode: `
    .sizzling-sun {
      background-color: #ffd700;
      color: #000;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .sizzling-sun:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: sizzle 2s linear infinite;
    }
    
    @keyframes sizzle {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }`},
      {
        name: 'Wavy Ocean',
        className: 'wavy-ocean',
        cssCode: `
    .wavy-ocean {
      background-color: #4682b4;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .wavy-ocean:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: wave 3s linear infinite;
    }
    
    @keyframes wave {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      50% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }`},
      {
        name: 'Shimmering Pearl',
        className: 'shimmering-pearl',
        cssCode: `
    .shimmering-pearl {
      background-color: #f0f0f0;
      color: #000;
      border: 2px solid #f0f0f0;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .shimmering-pearl:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(to right, #fff, #f0f0f0, #fff);
      border-radius: 10px;
      animation: shimmer 2s linear infinite;
    }
    
    @keyframes shimmer {
      0% {
        background-position: -200% 50%;
      }
      100% {
        background-position: 200% 50%;
      }
    }`},
      {
        name: 'Dancing Flame',
        className: 'dancing-flame',
        cssCode: `
    .dancing-flame {
      background-color: #ff7f50;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .dancing-flame:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0.3) 100%);
      border-radius: 50%;
      animation: dance 2s ease-in-out infinite;
    }
    
    @keyframes dance {
      0%, 100% {
        transform: translateY(-50%) scale(1);
      }
      50% {
        transform: translateY(-50%) scale(1.1);
      }
    }`},
      {
        name: 'Twinkling Twilight',
        className: 'twinkling-twilight',
        cssCode: `
    .twinkling-twilight {
      background-color: #483d8b;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .twinkling-twilight:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: twinkle 2s linear infinite;
    }
    
    @keyframes twinkle {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }`},
      {
        name: 'Mystical Moon',
        className: 'mystical-moon',
        cssCode: `
    .mystical-moon {
      background-color: #f0f0f0;
      color: #000;
      border: 2px solid #f0f0f0;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .mystical-moon:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      animation: lunar 5s linear infinite;
    }
    
    @keyframes lunar {
      0% {
        transform: translateX(-50%);
        opacity: 0;
      }
      50% {
        transform: translateX(50%);
        opacity: 1;
      }
      100% {
        transform: translateX(-50%);
        opacity: 0;
      }
    }`},
      {
        name: 'Whirling Wind',
        className: 'whirling-wind',
        cssCode: `
    .whirling-wind {
      background-color: #add8e6;
      color: #000;
      border: 2px solid #add8e6;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .whirling-wind:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      animation: whirl 3s linear infinite;
    }
    
    @keyframes whirl {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`},
    
        {
            name: 'Twinkling Star',
            className: 'twinkling-star',
            cssCode: `
        .twinkling-star {
          background-color: #f0f0f0;
          color: #000;
          border: 2px solid #f0f0f0;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .twinkling-star:before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-color: rgba(255, 255, 255, 0.5);
          animation: twinkle 2s linear infinite;
        }
        
        @keyframes twinkle {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }`},
          {
            name: 'Flickering Candle',
            className: 'flickering-candle',
            cssCode: `
        .flickering-candle {
          background-color: #ffcc99;
          color: #000;
          border: none;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .flickering-candle:before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          animation: flicker 1s linear infinite;
        }
        
        @keyframes flicker {
          0% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }`},
          {
            name: 'Glowing Firefly',
            className: 'glowing-firefly',
            cssCode: `
        .glowing-firefly {
          background-color: #0f0;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .glowing-firefly:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300%;
          height: 300%;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: glow 1s linear infinite;
        }
        
        @keyframes glow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }`},
          {
            name: 'Bouncing Ball',
            className: 'bouncing-ball',
            cssCode: `
        .bouncing-ball {
          background-color: #ff6347;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: bounce 1s ease infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }`},
          {
            name: 'Floating Lantern',
            className: 'floating-lantern',
            cssCode: `
        .floating-lantern {
          background-color: #ffc0cb;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }`},
          {
            name: 'Raindrop Ripple',
            className: 'raindrop-ripple',
            cssCode: `
        .raindrop-ripple {
          background-color: #87ceeb;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .raindrop-ripple:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300%;
          height: 300%;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: ripple 1s linear infinite;
        }
        
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }`},
          {
            name: 'Swinging Pendulum',
            className: 'swinging-pendulum',
            cssCode: `
        .swinging-pendulum {
          background-color: #d2b48c;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: swing 2s ease-in-out infinite;
        }
        
        @keyframes swing {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }`},
          {
            name: 'Galaxy Spin',
            className: 'galaxy-spin',
            cssCode: `
        .galaxy-spin {
          background-color: #000;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }`},
          {
            name: 'Moonlight Glimmer',
            className: 'moonlight-glimmer',
            cssCode: `
        .moonlight-glimmer {
          background-color: #f5deb3;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .moonlight-glimmer:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300%;
          height: 300%;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: glimmer 2s linear infinite;
        }
        
        @keyframes glimmer {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }`},
          {
            name: 'Aurora Borealis',
            className: 'aurora-borealis',
            cssCode: `
        .aurora-borealis {
          background: linear-gradient(to right, #9400d3, #4b0082, #0000ff, #00ff00, #ffff00, #ff7f00, #ff0000);
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: aurora 5s linear infinite;
        }
        
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }`},{
        name: 'Shining Star',
        className: 'shining-star',
        cssCode: `
    .shining-star {
      background-color: #ffd700;
      color: #fff;
      border: 2px solid #ffd700;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .shining-star:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      animation: shining 2s infinite;
    }
    
    @keyframes shining {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
        opacity: 0;
      }
      100% {
        transform: scale(0);
        opacity: 0;
      }
    }`
      },
      {
        name: 'Electric Ripple',
        className: 'electric-ripple',
        cssCode: `
    .electric-ripple {
      background-color: #1e90ff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .electric-ripple:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      animation: ripple 1s linear;
    }
    
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }`
      },
      {
        name: 'Sparkling Gem',
        className: 'sparkling-gem',
        cssCode: `
    .sparkling-gem {
      background-color: #7fffd4;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .sparkling-gem:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: sparkle 2s linear infinite;
    }
    
    @keyframes sparkle {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }`
      },
      {
        name: 'Neon Glow',
        className: 'neon-glow',
        cssCode: `
    .neon-glow {
      background-color: #ff00ff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .neon-glow:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      animation: neon 2s linear infinite;
    }
    
    @keyframes neon {
      0% {
        transform: translateX(-50%);
      }
      50% {
        transform: translateX(50%);
      }
      100% {
        transform: translateX(-50%);
      }
    }`
      },
      {
        name: 'Flickering Flame',
        className: 'flickering-flame',
        cssCode: `
    .flickering-flame {
      background-color: #ff4500;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .flickering-flame:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      animation: flicker 0.5s linear infinite alternate;
    }
    
    @keyframes flicker {
      0% {
        opacity: 0.8;
      }
      100% {
        opacity: 1;
      }
    }`
      },
      {
        name: 'Glowing Orb',
        className: 'glowing-orb',
        cssCode: `
    .glowing-orb {
      background-color: #00ffff;
      color: #fff;
      border: 2px solid #00ffff;
      padding: 10px 20px;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .glowing-orb:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      animation: glow 2s linear infinite;
    }
    
    @keyframes glow {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }`
      },
      {
        name: 'Dancing Lights',
        className: 'dancing-lights',
        cssCode: `
    .dancing-lights {
      background-color: #808080;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .dancing-lights:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #ff0000, #00ff00, #0000ff, #ff0000);
      background-size: 400% 100%;
      animation: lights 3s linear infinite;
    }
    
    @keyframes lights {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }`
      },
      {
        name: 'Rainbow Circle',
        className: 'rainbow-circle',
        cssCode: `
    .rainbow-circle {
      background-color: #ff00ff;
      color: #fff;
      border: 2px solid #ff00ff;
      padding: 10px 20px;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .rainbow-circle:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8a2be2);
      background-size: 600% 100%;
      border-radius: 50%;
      animation: rainbow 3s linear infinite;
    }
    
    @keyframes rainbow {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`
      },
      {
        name: 'Pulsating Heart',
        className: 'pulsating-heart',
        cssCode: `
    .pulsating-heart {
      background-color: #ff69b4;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .pulsating-heart:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: pulse 1.5s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.8);
      }
    }`
      },
      {
        name: 'Fading Moon',
        className: 'fading-moon',
        cssCode: `
    .fading-moon {
      background-color: #d3d3d3;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    
    .fading-moon:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: fade 3s linear infinite;
    }
    
    @keyframes fade {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }`
      },
    {
      name: 'Fireball Button',
      className: 'fireball-button',
      cssCode: `
  .fireball-button {
    background-color: #ff6347;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
  }
  
  .fireball-button:hover {
    background-color: #d13828;
  }`
    },
    {
      name: 'Blue Wave Button',
      className: 'blue-wave-button',
      cssCode: `
  .blue-wave-button {
    background-color: #4169e1;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .blue-wave-button:hover {
    background-color: #1e90ff;
  }`
    },
    {
      name: 'Green Leaf Button',
      className: 'green-leaf-button',
      cssCode: `
  .green-leaf-button {
    background-color: #32cd32;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 0;
    cursor: pointer;
  }
  
  .green-leaf-button:hover {
    background-color: #228b22;
  }`
    },
    {
      name: 'Pink Flower Button',
      className: 'pink-flower-button',
      cssCode: `
  .pink-flower-button {
    background-color: #ff69b4;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
  }
  
  .pink-flower-button:hover {
    background-color: #ff1493;
  }`
    },
    {
      name: 'Yellow Sunshine Button',
      className: 'yellow-sunshine-button',
      cssCode: `
  .yellow-sunshine-button {
    background-color: #ffff00;
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .yellow-sunshine-button:hover {
    background-color: #ffd700;
  }`
    },
    {
      name: 'Purple Grape Button',
      className: 'purple-grape-button',
      cssCode: `
  .purple-grape-button {
    background-color: #9932cc;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;
  }
  
  .purple-grape-button:hover {
    background-color: #800080;
  }`
    },
    {
      name: 'Orange Sunset Button',
      className: 'orange-sunset-button',
      cssCode: `
  .orange-sunset-button {
    background-color: #ff4500;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .orange-sunset-button:hover {
    background-color: #dc143c;
  }`
    },
    {
      name: 'Sky Blue Button',
      className: 'sky-blue-button',
      cssCode: `
  .sky-blue-button {
    background-color: #00bfff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .sky-blue-button:hover {
    background-color: #1e90ff;
  }`
    },
    {
      name: 'Orange Juice Button',
      className: 'orange-juice-button',
      cssCode: `
  .orange-juice-button {
    background-color: #ffa500;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
  }
  
  .orange-juice-button:hover {
    background-color: #ff8c00;
  }`
    },
    {
      name: 'Royal Purple Button',
      className: 'royal-purple-button',
      cssCode: `
  .royal-purple-button {
    background-color: #9400d3;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
  }
  
  .royal-purple-button:hover {
    background-color: #8a2be2;
  }`
    }
  ];
  
  const handleButtonClick = (index) => {
    setShowDialog(true);
    setButtonIndex(index);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setButtonIndex(null);
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="button-container">
        <div className='allbuttons'>
        {buttons.map((button, index) => (
      <button
        key={index}
        className={`${button.className} allbuttons`}
        onClick={() => handleButtonClick(index)}
      >
        {button.name}
      </button>
    ))}
        </div>
    {showDialog && (
      <div className="dialog-overlay-custom" onClick={handleCloseDialog}>
        <div className="dialog-box-custom" onClick={(e) => e.stopPropagation()}>
          <button className="close-button-custom" onClick={handleCloseDialog}>
            Close
          </button>
          <h2>{buttons[buttonIndex].name}</h2>
          <pre className="code-display">
            <code>{buttons[buttonIndex].cssCode}</code>
          </pre>
          <button
            className="copy-button-custom"
            onClick={() => handleCopyToClipboard(buttons[buttonIndex].cssCode)}
          >
            Copy CSS Code
          </button>
        </div>
      </div>
    )}
  </div>
  );
};

export default ButtonsPage;
