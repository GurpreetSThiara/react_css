import React, { useState } from 'react';

const ImageToColors = () => {
  const [colors, setColors] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
        const colorSet = new Set();

        for (let i = 0; i < imageData.length; i += 4) {
          const r = imageData[i];
          const g = imageData[i + 1];
          const b = imageData[i + 2];
          const a = imageData[i + 3];
          if (a === 255) { // Ignore transparent pixels
            colorSet.add(`rgb(${r}, ${g}, ${b})`);
          }
        }

        setColors(Array.from(colorSet));
      };

      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {colors.map((color, index) => (
          <div key={index} style={{ backgroundColor: color, width: '50px', height: '50px', margin: '5px' }}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageToColors;
