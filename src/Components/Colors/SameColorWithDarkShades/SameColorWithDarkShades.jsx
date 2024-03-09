import React, { useState, useMemo } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import tinycolor from "tinycolor2";

const generateSimilarColors = (inputColor, numColors = 100, similarity = 0.5) => {
    const similarColors = [];

    const baseColor = tinycolor(inputColor);
  
    const darkenFactor = 1 - similarity;
  
    for (let i = 1; i <= numColors; i++) {
      const newColor = baseColor.darken(darkenFactor * (i / numColors)).toString();
      similarColors.push(newColor);
      
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

const SameColorWithDarkShades = ({ inputColor = "#000000" }) => {
  const [copiedColor, setCopiedColor] = useState(null);

  const handleCopy = (color) => {
    setCopiedColor(color);
    setTimeout(() => {
      setCopiedColor(null);
    }, 1500);
  };

  const similarColors = useMemo(
    () => generateSimilarColors(inputColor),
    [inputColor]
  );

  return (
    <div className="color-palette">
      {similarColors.map((color, index) => (
        <CopyToClipboard
          key={index}
          text={color}
          onCopy={() => handleCopy(color)}
        >
          <ColorBox color={color} />
        </CopyToClipboard>
      ))}
      {copiedColor && (
        <div className="copied-message">Copied: {copiedColor}</div>
      )}
    </div>
  );
};

export default SameColorWithDarkShades;
