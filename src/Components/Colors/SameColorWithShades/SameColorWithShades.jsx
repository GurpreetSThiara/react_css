import React, { useState, useMemo } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './SameColorWithShades.css';
import tinycolor from 'tinycolor2';

const generateSimilarColors = (inputColor) => {
    const similarColors = [];
    const baseColor = tinycolor(inputColor);

    
    // Generating 100 shades by varying brightness

        for (let i = 0; i < 160; i++) {
            const shadeColor = baseColor.lighten(i / 160).toString();
          similarColors.push(shadeColor);
        }
    
      
  
  
    return similarColors;
  };
  

const ColorBox = ({ color, onClick }) => {
  return (
    <div className="box">
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={onClick}
      />
      {color}
    </div>
  );
};

const SameColorWithShades = ({ inputColor = "#000000"  }) => {

  const [copiedColor, setCopiedColor] = useState(null);

  const handleCopy = (color) => {
    setCopiedColor(color);
    setTimeout(() => {
      setCopiedColor(null);
    }, 1500);
  };

  const similarColors = useMemo(() => generateSimilarColors(inputColor), [inputColor]);

  return (
    <div className="color-palette">
      {similarColors.map((color, index) => (
        <CopyToClipboard key={index} text={color} onCopy={() => handleCopy(color)}>
          <ColorBox color={color} />
        </CopyToClipboard>
      ))}
      {copiedColor && <div className="copied-message">Copied: {copiedColor}</div>}
    </div>
  );
};

export default SameColorWithShades;
