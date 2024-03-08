import React,{useState} from 'react'
import ColorPalette from '../Components/Colors/ColorPalette'
import './HomePage.css'
import ImageToColors from '../Components/ImageToColors/ImageToColors';

const HomePage = () => {
    const [inputColor, setInputColor] = useState('#40B7F0');
    const [inputColor1, setInputColor1] = useState('#40B7F0');

    const handleInputChange = (e) => {
      setInputColor(e.target.value);
    };
  
    const handleGeneratePalette = () => {
      // Logic for generating palette
      const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
  
  if (hexRegex.test(inputColor)) {
    // If inputColor is a valid hex color code, proceed with generating the palette
    setInputColor1(inputColor);
  } else {
    // If inputColor is not a valid hex color code, display an error message or handle it as needed
    alert('please enter a valid hexcode color');
   } 
    };
  return (
    <div>
          <div className="input-container">
        <input
          type="text"
          value={inputColor}
          onChange={handleInputChange}
          placeholder="Enter color code"
          className="input-field"
        />
        <button onClick={()=>{handleGeneratePalette(inputColor)}} className="input-button">Generate Palette</button>
      </div>
        <ColorPalette inputColor={inputColor1}/>

        <ImageToColors/>
      
    </div>
  )
}

export default HomePage
