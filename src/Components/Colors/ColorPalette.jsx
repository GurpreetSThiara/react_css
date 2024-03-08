import React, { useState, useMemo } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorPalette.css';

const generateSimilarColors = (inputColor) => {
  const similarColors = new Set();
  while (similarColors.size < 100) {
    const newColor = inputColor.replace(/^#/, '');
    const delta = 32;
    const r = parseInt(newColor.substring(0, 2), 16) + Math.round((Math.random() - 0.5) * delta);
    const g = parseInt(newColor.substring(2, 4), 16) + Math.round((Math.random() - 0.5) * delta);
    const b = parseInt(newColor.substring(4, 6), 16) + Math.round((Math.random() - 0.5) * delta);
    const similarHex = `#${(r < 0 ? 0 : r > 255 ? 255 : r).toString(16).padStart(2, '0')}${(g < 0 ? 0 : g > 255 ? 255 : g).toString(16).padStart(2, '0')}${(b < 0 ? 0 : b > 255 ? 255 : b).toString(16).padStart(2, '0')}`;
    similarColors.add(similarHex);
  }
  return Array.from(similarColors);
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

const ColorPalette = ({ inputColor = "#000000" }) => {
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

export default ColorPalette;
