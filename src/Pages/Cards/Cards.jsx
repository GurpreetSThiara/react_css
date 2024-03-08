// import './Cards.css'

// const Cards = () => {
//   return (
//     <div className="container">
//     <div className="card gradient-background"></div>
//     <div className="card material-design"></div>
//     <div className="card neumorphism"></div>
//     <div className="card minimalist"></div>
//     <div className="card rounded-shadows"></div>
//     <div className="card hover-expand"></div>
//     <div className="card bordered-gradient"></div>
//     <div className="card floating"></div>
//     <div className="card geometric"></div>
//     <div className="card dark-theme"></div>
//   </div>
//   )
// }

// export default Cards
// App.js

import "./Cards.css";
import React, { useState } from "react";
import "./CardNames.css";

const cardStyles = [
    {
        name: 'Subtle Elegance',
        className: 'subtle-elegance',
        cssCode: `
    .card.subtle-elegance {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #f0f0f0;
      box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.2),
                 -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
    }`
      },
      {
        name: 'Delicate Touch',
        className: 'delicate-touch',
        cssCode: `
    .card.delicate-touch {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #f8f8f8;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Gentle Aura',
        className: 'gentle-aura',
        cssCode: `
    .card.gentle-aura {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #f6f6f6;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Soft Radiance',
        className: 'soft-radiance',
        cssCode: `
    .card.soft-radiance {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #f4f4f4;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Tender Glow',
        className: 'tender-glow',
        cssCode: `
    .card.tender-glow {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #f2f2f2;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Velvet Charm',
        className: 'velvet-charm',
        cssCode: `
    .card.velvet-charm {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #f9f9f9;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Silken Touch',
        className: 'silken-touch',
        cssCode: `
    .card.silken-touch {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #fcfcfc;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Feathered Grace',
        className: 'feathered-grace',
        cssCode: `
    .card.feathered-grace {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #fdfdfd;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Pearlescent Dream',
        className: 'pearlescent-dream',
        cssCode: `
    .card.pearlescent-dream {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #fffffd;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Whispering Mist',
        className: 'whispering-mist',
        cssCode: `
    .card.whispering-mist {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #f7f7f7;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Cloud Veil',
        className: 'cloud-veil',
        cssCode: `
    .card.cloud-veil {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #fefefe;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Misty Horizon',
        className: 'misty-horizon',
        cssCode: `
    .card.misty-horizon {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #f5f5f5;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Luminous Mist',
        className: 'luminous-mist',
        cssCode: `
    .card.luminous-mist {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #fcfcfc;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
      {
        name: 'Opal Glow',
        className: 'opal-glow',
        cssCode: `
    .card.opal-glow {
      width: 190px;
      height: 254px;
      border-radius: 20px;
      background: #f8f8f8;
      box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1),
                 -6px -6px 12px 0 rgba(255, 255, 255, 0.3);
    }`
      },
  {
    name: "Lunar Eclipse",
    className: "lunar-eclipse",
    cssCode: `
    .card.lunar-eclipse {
      background: radial-gradient(circle, #333, #000);
      position: relative;
      overflow: hidden;
    }
    
    .card.lunar-eclipse:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      border-radius: 50%;
      background: radial-gradient(circle, #fff, transparent);
      animation: eclipse 6s infinite linear;
      transform: translate(-50%, -50%);
    }
    
    @keyframes eclipse {
      0% { transform: translate(-50%, -50%) scale(0); }
      50% { transform: translate(-50%, -50%) scale(1.5); }
      100% { transform: translate(-50%, -50%) scale(0); }
    }`,
  },
  {
    name: "Crystal Shard",
    className: "crystal-shard",
    cssCode: `
    .card.crystal-shard {
      background: linear-gradient(to right, #4e54c8, #8f94fb, #b4ec51);
      position: relative;
      overflow: hidden;
    }
    
    .card.crystal-shard:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, #fff, transparent);
      animation: shard 4s infinite linear;
    }
    
    @keyframes shard {
      from { transform: rotate(0deg) scale(1); opacity: 0; }
      to { transform: rotate(360deg) scale(2); opacity: 1; }
    }`,
  },
  {
    name: "Mystic River",
    className: "mystic-river",
    cssCode: `
    .card.mystic-river {
      background: linear-gradient(to bottom, #88d3ce, #6e45e2);
      position: relative;
      overflow: hidden;
    }
    
    .card.mystic-river:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
      animation: river 4s infinite linear;
    }
    
    @keyframes river {
      from { transform: translateX(-100%); }
      to { transform: translateX(100%); }
    }`,
  },
  {
    name: "Northern Lights",
    className: "northern-lights",
    cssCode: `
    .card.northern-lights {
      background: linear-gradient(to bottom, #0575e6, #021b79);
      position: relative;
      overflow: hidden;
    }
    
    .card.northern-lights:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent);
      animation: lights 6s infinite linear;
    }
    
    @keyframes lights {
      from { transform: translateY(-100%); }
      to { transform: translateY(100%); }
    }`,
  },
  {
    name: "Spectral Dance",
    className: "spectral-dance",
    cssCode: `
    .card.spectral-dance {
      background: linear-gradient(to bottom, #0d0d0d, #434343);
      position: relative;
      overflow: hidden;
    }
    
    .card.spectral-dance:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 150%;
      height: 150%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent);
      animation: dance 4s infinite linear;
      transform: translate(-50%, -50%);
    }
    
    @keyframes dance {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }`,
  },
  {
    name: "Astral Projection",
    className: "astral-projection",
    cssCode: `
    .card.astral-projection {
      background: linear-gradient(to bottom, #09203f, #537895);
      position: relative;
      overflow: hidden;
    }
    
    .card.astral-projection:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent);
      animation: projection 4s infinite linear;
      transform: translate(-50%, -50%);
    }
    
    @keyframes projection {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }`,
  },
  {
    name: "Celestial Symphony",
    className: "celestial-symphony",
    cssCode: `
    .card.celestial-symphony {
      background: linear-gradient(to bottom, #191654, #43c6ac);
      position: relative;
      overflow: hidden;
    }
    
    .card.celestial-symphony:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
      animation: symphony 4s infinite linear;
    }
    
    @keyframes symphony {
      from { transform: translateY(-100%); }
      to { transform: translateY(100%); }
    }`,
  },
  {
    name: "Galactic Voyage",
    className: "galactic-voyage",
    cssCode: `
    .card.galactic-voyage {
      background: linear-gradient(to bottom, #000428, #004e92);
      position: relative;
      overflow: hidden;
    }
    
    .card.galactic-voyage:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent);
      animation: voyage 4s infinite linear;
    }
    
    @keyframes voyage {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }`,
  },
  {
    name: "Enchanted Garden",
    className: "enchanted-garden",
    cssCode: `
    .card.enchanted-garden {
      background: linear-gradient(to bottom, #76b852, #8dc26f);
      position: relative;
      overflow: hidden;
    }
    
    .card.enchanted-garden:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
      animation: garden 4s infinite linear;
    }
    
    @keyframes garden {
      from { transform: translateX(-100%); }
      to { transform: translateX(100%); }
    }`,
  },
  {
    name: "Ethereal Aura",
    className: "ethereal-aura",
    cssCode: `
    .card.ethereal-aura {
      background: linear-gradient(to bottom, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
      position: relative;
      overflow: hidden;
    }
    
    .card.ethereal-aura:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent);
      animation: aura 4s infinite linear;
      transform: translate(-50%, -50%);
    }
    
    @keyframes aura {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }`,
  },
  {
    name: "Electric Surge",
    className: "electric-surge",
    cssCode: `
    .card.electric-surge {
      background: linear-gradient(to right, #003399, #ffcc00, #cc0000);
      position: relative;
      overflow: hidden;
    }
    
    .card.electric-surge:before {
      content: '';
      position: absolute;
      top: -50%;
      left: 0;
      width: 100%;
      height: 150%;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
      animation: electric 2s infinite linear;
    }
    
    @keyframes electric {
      from { transform: translateY(0); }
      to { transform: translateY(100%); }
    }`,
  },
  {
    name: "Inferno Blaze",
    className: "inferno-blaze",
    cssCode: `
    .card.inferno-blaze {
      background: #000;
      position: relative;
      overflow: hidden;
    }
    
    .card.inferno-blaze:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, #ff7e5f, #feb47b, #fffb95);
      animation: inferno 2s infinite linear;
      transform: translateX(-50%);
    }
    
    @keyframes inferno {
      from { transform: scale(1); opacity: 1; }
      to { transform: scale(2); opacity: 0; }
    }`,
  },
  {
    name: "Aqua Flow",
    className: "aqua-flow",
    cssCode: `
    .card.aqua-flow {
      background: linear-gradient(to bottom, #0066ff, #00ccff);
      position: relative;
      overflow: hidden;
    }
    
    .card.aqua-flow:before {
      content: '';
      position: absolute;
      top: 0;
      left: -50%;
      width: 200%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      animation: aqua 2s infinite linear;
    }
    
    @keyframes aqua {
      from { transform: translateX(-100%); }
      to { transform: translateX(100%); }
    }`,
  },
  {
    name: "Rainbow Ripples",
    className: "rainbow-ripples",
    cssCode: `
    .card.rainbow-ripples {
      background: #000;
      position: relative;
      overflow: hidden;
    }
    
    .card.rainbow-ripples:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background: radial-gradient(circle, #ff0000, #ff7e00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
      animation: ripple 4s infinite linear;
      transform: translate(-50%, -50%);
    }
    
    @keyframes ripple {
      from { transform: scale(0); opacity: 0.6; }
      to { transform: scale(2); opacity: 0; }
    }`,
  },
  {
    name: "Twinkling Stars",
    className: "twinkling-stars",
    cssCode: `
    .card.twinkling-stars {
      background-color: #000;
      background-image: radial-gradient(white 2%, transparent 3%);
      background-size: 30px 30px;
      animation: twinkling 1s infinite linear;
    }
    
    @keyframes twinkling {
      from { background-position: 0 0; }
      to { background-position: 30px 30px; }
    }`,
  },
  {
    name: "Fireflies Glow",
    className: "fireflies-glow",
    cssCode: `
    .card.fireflies-glow {
      background: linear-gradient(to right, #003399, #ffcc00, #cc0000);
      position: relative;
      overflow: hidden;
    }
    
    .card.fireflies-glow:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://media.giphy.com/media/vB4aVv28XAkak/giphy.gif');
      opacity: 0.5;
      animation: flicker 2s infinite linear;
    }
    
    @keyframes flicker {
      0% { opacity: 0.5; }
      50% { opacity: 0.2; }
      100% { opacity: 0.5; }
    }`,
  },
  {
    name: "Solar Flare",
    className: "solar-flare",
    cssCode: `
    .card.solar-flare {
      background: #000;
      position: relative;
      overflow: hidden;
    }
    
    .card.solar-flare:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 400%;
      height: 400%;
      background: radial-gradient(circle, #ffcc00, #ff9900, #ff6600, #ff3300, #ff0000);
      animation: flare 4s infinite linear;
      transform: translate(-50%, -50%);
    }
    
    @keyframes flare {
      from { transform: scale(0); opacity: 0.6; }
      to { transform: scale(2); opacity: 0; }
    }`,
  },
  {
    name: "Neon Lights",
    className: "neon-lights",
    cssCode: `
    .card.neon-lights {
      background: #000;
      position: relative;
      overflow: hidden;
    }
    
    .card.neon-lights:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background: radial-gradient(circle, #ff0000, #00ff00, #0000ff);
      animation: neon 2s infinite linear;
      transform: translate(-50%, -50%);
    }
    
    @keyframes neon {
      0% { transform: scale(0); opacity: 0.6; }
      50% { transform: scale(1.5); opacity: 0; }
      100% { transform: scale(0); opacity: 0; }
    }`,
  },
  {
    name: "Pixel Galaxy",
    className: "pixel-galaxy",
    cssCode: `
    .card.pixel-galaxy {
      background: #000;
      position: relative;
      overflow: hidden;
    }
    
    .card.pixel-galaxy:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background-image: url('https://media.giphy.com/media/QWtbXfvVSgJQ8W28oo/giphy.gif');
      animation: galaxy 10s infinite linear;
      transform: translate(-50%, -50%);
    }
    
    @keyframes galaxy {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }`,
  },
  {
    name: "Magic Portal",
    className: "magic-portal",
    cssCode: `
    .card.magic-portal {
      background: #000;
      position: relative;
      overflow: hidden;
    }
    
    .card.magic-portal:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      border-radius: 50%;
      background: radial-gradient(circle, #ff0000, #ff6600, #ffff00, #00ff00, #0000ff);
      animation: portal 5s infinite linear;
      transform: translate(-50%, -50%) scale(0);
    }
    
    @keyframes portal {
      0% { transform: translate(-50%, -50%) scale(0); }
      50% { transform: translate(-50%, -50%) scale(1); }
      100% { transform: translate(-50%, -50%) scale(0); }
    }`,
  },
  {
    name: "Dynamic Gradient Delight",
    className: "gradient-background",
    cssCode: `
  .card.gradient-background {
    background: linear-gradient(to bottom right, #ff6b6b, #5b247a);
  }`,
  },
  {
    name: "Elevate Materialize",
    className: "material-design",
    cssCode: `
  .card.material-design {
    background: #fff;
  }`,
  },
  {
    name: "Soft Neumorphic Elegance",
    className: "neumorphism",
    cssCode: `
  .card.neumorphism {
    background: #f0f0f0;
    box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.2),
               -8px -8px 16px 0 rgba(255, 255, 255, 0.5);
  }`,
  },
  {
    name: "Sleek Minimalist Aura",
    className: "minimalist",
    cssCode: `
  .card.minimalist {
    background: #f9f9f9;
    border: 1px solid #ddd;
  }`,
  },
  {
    name: "Rounded Shadows",
    className: "rounded-shadows",
    cssCode: `
  .card.rounded-shadows {
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  }`,
  },
  {
    name: "Hover Expand",
    className: "hover-expand",
    cssCode: `
  .card.hover-expand {
    background: #f1f1f1;
    transition: transform 0.3s ease;
  }
  
  .card.hover-expand:hover {
    transform: translateY(-5px);
  }`,
  },
  {
    name: "Bordered Gradient",
    className: "bordered-gradient",
    cssCode: `
  .card.bordered-gradient {
    background: linear-gradient(to right, #74ebd5, #acb6e5);
    border: 2px solid #fff;
  }`,
  },
  {
    name: "Floating",
    className: "floating",
    cssCode: `
  .card.floating {
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }`,
  },
  {
    name: "Geometric",
    className: "geometric",
    cssCode: `
  .card.geometric {
    background: #8bc34a;
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%);
  }`,
  },
  {
    name: "Dark Theme",
    className: "dark-theme",
    cssCode: `
  .card.dark-theme {
    background: #333;
    color: #fff;
  }`,
  },
  {
    name: "Vibrant Gradient",
    className: "vibrant-gradient",
    cssCode: `
    .card.vibrant-gradient {
      background: linear-gradient(to right, #FFD700, #FF6347);
    }`,
  },
  {
    name: "Pastel Elegance",
    className: "pastel-elegance",
    cssCode: `
    .card.pastel-elegance {
      background: #F5DEB3;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }`,
  },
  {
    name: "Sunset Sky",
    className: "sunset-sky",
    cssCode: `
    .card.sunset-sky {
      background: linear-gradient(to bottom, #F08080, #FFA07A);
    }`,
  },
  {
    name: "Ocean Blue",
    className: "ocean-blue",
    cssCode: `
    .card.ocean-blue {
      background: #87CEEB;
    }`,
  },
  {
    name: "Golden Glow",
    className: "golden-glow",
    cssCode: `
    .card.golden-glow {
      background: #FFD700;
    }`,
  },
  {
    name: "Royal Purple",
    className: "royal-purple",
    cssCode: `
    .card.royal-purple {
      background: #800080;
    }`,
  },
  {
    name: "Forest Green",
    className: "forest-green",
    cssCode: `
    .card.forest-green {
      background: #228B22;
    }`,
  },
  {
    name: "Cherry Blossom",
    className: "cherry-blossom",
    cssCode: `
    .card.cherry-blossom {
      background: #FFB6C1;
    }`,
  },
  {
    name: "Sunny Day",
    className: "sunny-day",
    cssCode: `
    .card.sunny-day {
      background: #FFD700;
    }`,
  },
  {
    name: "Moonlit Night",
    className: "moonlit-night",
    cssCode: `
    .card.moonlit-night {
      background: #708090;
    }`,
  },
  {
    name: "Luminous Waves",
    className: "luminous-waves",
    cssCode: `
    .card.luminous-waves {
      background: linear-gradient(to bottom, #ff9966, #ff5e62, #ff66cc, #0099ff, #33ccff, #33cc33, #ffff66, #ff9933);
      animation: wave 5s infinite linear alternate;
    }
    
    @keyframes wave {
      0% { background-position: 0% 0%; }
      100% { background-position: 100% 100%; }
    }`,
  },
  {
    name: "Neon Glow",
    className: "neon-glow",
    cssCode: `
    .card.neon-glow {
      background: #000;
      box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0, 0 0 80px #0f0;
      animation: neon 1.5s ease-in-out infinite alternate;
    }
    
    @keyframes neon {
      from { text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0, 0 0 40px #0f0; }
      to { text-shadow: 0 0 20px #0f0, 0 0 40px #0f0, 0 0 60px #0f0, 0 0 80px #0f0; }
    }`,
  },
  {
    name: "Glowing Orb",
    className: "glowing-orb",
    cssCode: `
    .card.glowing-orb {
      background: radial-gradient(circle, #ff00cc, #6600cc, #0099ff);
      box-shadow: 0 0 20px #ff00cc, 0 0 40px #ff00cc, 0 0 80px #ff00cc;
      animation: pulse 2s ease-out infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(0.8); }
      50% { transform: scale(1.2); }
      100% { transform: scale(0.8); }
    }`,
  },
  {
    name: "Dancing Lights",
    className: "dancing-lights",
    cssCode: `
    .card.dancing-lights {
      background: linear-gradient(to right, #ff0066, #cc00ff, #ff9933, #00cc99);
      animation: lights 2s infinite linear;
    }
    
    @keyframes lights {
      0% { background-position: 0% 0%; }
      100% { background-position: 100% 100%; }
    }`,
  },
  {
    name: "Twinkling Stars",
    className: "twinkling-stars",
    cssCode: `
    .card.twinkling-stars {
      background-color: #000;
      background-image: radial-gradient(white 2%, transparent 3%);
      background-size: 30px 30px;
      animation: twinkling 1s infinite linear;
    }
    
    @keyframes twinkling {
      from { background-position: 0 0; }
      to { background-position: 30px 30px; }
    }`,
  },
  {
    name: "Ripple Effect",
    className: "ripple-effect",
    cssCode: `
    .card.ripple-effect {
      background: #00ccff;
      overflow: hidden;
      position: relative;
    }
    
    .card.ripple-effect:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: ripple 2s linear infinite;
      transform: translate(-50%, -50%);
    }
    
    @keyframes ripple {
      from {
        transform: scale(0);
        opacity: 0.6;
      }
      to {
        transform: scale(2);
        opacity: 0;
      }
    }`,
  },
  {
    name: "Firework Explosion",
    className: "firework-explosion",
    cssCode: `
    .card.firework-explosion {
      background: #000;
      overflow: hidden;
      position: relative;
    }
    
    .card.firework-explosion:before {
      content: '';
      position: absolute;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, #f00, #ff0, #f0f);
      animation: explosion 2s linear infinite;
    }
    
    @keyframes explosion {
      from {
        transform: scale(0);
        opacity: 1;
      }
      to {
        transform: scale(2);
        opacity: 0;
      }
    }`,
  },
  {
    name: "Sparkling Galaxy",
    className: "sparkling-galaxy",
    cssCode: `
    .card.sparkling-galaxy {
      background: linear-gradient(135deg, #f00, #0ff, #00f, #ff0);
      background-size: 400% 400%;
      animation: galaxy 15s infinite;
    }
    
    @keyframes galaxy {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }`,
  },
  {
    name: "Dreamy Clouds",
    className: "dreamy-clouds",
    cssCode: `
    .card.dreamy-clouds {
      background: linear-gradient(135deg, #fff, #cceeff);
      background-size: 400% 400%;
      animation: clouds 15s infinite;
    }
    
    @keyframes clouds {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }`,
  },
  {
    name: "Enchanted Forest",
    className: "enchanted-forest",
    cssCode: `
    .card.enchanted-forest {
      background: radial-gradient(circle, #1e9600, #206300, #0c4817);
    }`,
  },
  {
    name: "Mystical Aura",
    className: "mystical-aura",
    cssCode: `
    .card.mystical-aura {
      background: radial-gradient(circle, #b226e6, #7313ce, #2d005b);
    }`,
  },
  {
    name: "Magical Twilight",
    className: "magical-twilight",
    cssCode: `
    .card.magical-twilight {
      background: linear-gradient(to bottom, #3b4371, #f3904f);
    }`,
  },
  {
    name: "Whimsical Wonderland",
    className: "whimsical-wonderland",
    cssCode: `
    .card.whimsical-wonderland {
      background: linear-gradient(to right, #ff94c2, #84fab0);
    }`,
  },
  {
    name: "Ethereal Dreams",
    className: "ethereal-dreams",
    cssCode: `
    .card.ethereal-dreams {
      background: radial-gradient(circle, #d1e1ec, #fde8e0, #fcd7cd);
    }`,
  },
  {
    name: "Celestial Symphony",
    className: "celestial-symphony",
    cssCode: `
    .card.celestial-symphony {
      background: linear-gradient(to bottom, #191654, #43c6ac);
    }`,
  },
  {
    name: "Harmonic Fusion",
    className: "harmonic-fusion",
    cssCode: `
    .card.harmonic-fusion {
      background: linear-gradient(to right, #f0f, #ff0, #0ff);
    }`,
  },
  {
    name: "Tranquil Oasis",
    className: "tranquil-oasis",
    cssCode: `
    .card.tranquil-oasis {
      background: linear-gradient(to right, #78ffd6, #a8ff78);
    }`,
  },
  {
    name: "Radiant Glow",
    className: "radiant-glow",
    cssCode: `
    .card.radiant-glow {
      background: radial-gradient(circle, #f0d629, #f04e29);
    }`,
  },
  {
    name: "Aurora Borealis",
    className: "aurora-borealis",
    cssCode: `
    .card.aurora-borealis {
      background: linear-gradient(to right, #ff7e5f, #feb47b, #fffb95);
    }`,
  },
];

const Cards = () => {
  const [copied, setCopied] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [cssCode, setCssCode] = useState('');

  const handleCopyToClipboard = (cssCode) => {
    navigator.clipboard
      .writeText(cssCode)
      .then(() => setCopied(cssCode))
      .catch((error) => console.error("Failed to copy:", error));
  };

  return (
    <div className="container">
      {cardStyles.map((style, index) => (
        <div
          key={index}
          className={`card ${style.className}`}
          onClick={() => {
            setShowDialog(true);
            setCssCode(style.cssCode);
          }}
        >
          <p>{style.name}</p>
        
        </div>
      ))}
      {showDialog && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowDialog(false)}>
              &times;
            </span>
            <pre>{cssCode}</pre>
            <button onClick={() => setShowDialog(false)}>Close</button>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Cards;
