import React, { useState } from 'react';

const ColorMixingPage = ({inputColor}) => {
  
  const mixColors = (hex1, hex2) => {
    const r1 = parseInt(hex1.substr(1, 2), 16);
    const g1 = parseInt(hex1.substr(3, 2), 16);
    const b1 = parseInt(hex1.substr(5, 2), 16);
    
    const r2 = parseInt(hex2.substr(1, 2), 16);
    const g2 = parseInt(hex2.substr(3, 2), 16);
    const b2 = parseInt(hex2.substr(5, 2), 16);
    
    const mixedColor = `rgb(${Math.floor((r1 + r2) / 2)}, ${Math.floor((g1 + g2) / 2)}, ${Math.floor((b1 + b2) / 2)})`;
    return mixedColor;
  };
  
  const generateMixedColors = (inputColor) => {
    const mixedColors = [];
    for (let i = 1; i <= 50; i++) {
      const hex2 = `#${(i * 123456).toString(16).substring(0, 6)}`; // generating random hex color
      const mixedColor = mixColors(inputColor, hex2);
      mixedColors.push(mixedColor);
    }
    return mixedColors;
  };
  
  const mixedColors = generateMixedColors(inputColor);
  
  return (
    <div>
      <input 
        type="color" 
        value={inputColor} 
        onChange={(e) => setInputColor(e.target.value)} 
      />
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div style={{margin: '10px'}}>
          <div style={{backgroundColor: inputColor, width: '100px', height: '100px'}}></div>
          <p>Input Color: {inputColor}</p>
        </div>
        {mixedColors.map((color, index) => (
          <div key={index} style={{margin: '10px'}}>
            <div style={{backgroundColor: color, width: '100px', height: '100px'}}></div>
            <p>Mixed Color: {color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorMixingPage;
