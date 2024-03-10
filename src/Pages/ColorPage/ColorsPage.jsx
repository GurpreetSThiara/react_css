import React,{useState} from 'react'
import './ColorsPage.css'
import ColorPalette from '../../Components/Colors/ColorPalette';
import ImageToColors from '../../Components/ImageToColors/ImageToColors';
import SameColorWithShades from '../../Components/Colors/SameColorWithShades/SameColorWithShades';
import SameColorWithDarkShades from '../../Components/Colors/SameColorWithDarkShades/SameColorWithDarkShades';
import ColorMixingPage from '../ColorMixingPage/ColorMixingPage';

const ColorsPage = () => {
  const[selectedPalette , setSelectedPalatte] = useState('default');
    const [inputColor, setInputColor] = useState('#ffffff');
    const [inputColor1, setInputColor1] = useState('#ffffff');

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
    <div className='colorpage'>
      <div className='colorpage-header'>
     <div>
     <h2 className='colorpage-heading'>Generate Similar Colors</h2>
     </div>
    <div className='colorpage-header-items'>
    <div  onClick={()=>{setSelectedPalatte('default')}} className={`${selectedPalette === 'default'?'pallete':'cursor'}`}>default</div>
     <div onClick={()=>{setSelectedPalatte('light')}} className={`${selectedPalette === 'light'?'pallete':'cursor'}`}>Light Shades</div>
     <div onClick={()=>{setSelectedPalatte('dark')}} className={`${selectedPalette === 'dark'?'pallete':'cursor'}`}>Dark Shades</div>
     {/* <div onClick={()=>{setSelectedPalatte('mixer')}} className={`${selectedPalette === 'mixer'?'pallete':'cursor'}`}>Mixer</div> */}
    </div>
     
      </div>
          <div className="input-container">
        <input
          type="text"
          value={inputColor}
          onChange={handleInputChange}
          placeholder="Enter color code"
          className="input-field"
        />
        <button onClick={()=>{handleGeneratePalette(inputColor)}} className="input-button">Generate</button>
      </div>
      {/* {selectedPalette !== 'default'?selectedPalette==='dark'?<SameColorWithDarkShades inputColor={inputColor1} />:<SameColorWithShades inputColor={inputColor1} />:<ColorPalette inputColor={inputColor1}/>}  */}
      {selectedPalette === 'default' && <ColorPalette inputColor={inputColor1}/>} 
      {selectedPalette === 'light' && <SameColorWithShades inputColor={inputColor1}/>} 
      {selectedPalette === 'dark' && <SameColorWithDarkShades inputColor={inputColor1} />} 
      {selectedPalette === 'mixer' && <ColorMixingPage inputColor={inputColor1}/>} 

        {/* <ImageToColors/> */}
      
    </div>
  )
}

export default ColorsPage
