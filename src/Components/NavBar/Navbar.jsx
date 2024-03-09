import { useEffect, useState } from 'react'
import './Navbar.css'
import ButtonsButton from './NavbarButtons/ButtonsButton'
import CardsButton from './NavbarButtons/CardsButton'
import ColorButton from './NavbarButtons/ColorButton'
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false); // Step 1: State to track dialog open/close
  const toggleDialog = () => {
    setDialogOpen(!dialogOpen); // Step 2: Toggle dialog open/close
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = currentScrollPos > prevScrollPos;
      const hasScrolledEnough = currentScrollPos > 150; // Adjust the threshold as needed

      setVisible(!isScrolledDown || !hasScrolledEnough);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <h2 className='navbar-heading'>free react css</h2>
      <div className='navbar-menu' onClick={toggleDialog}>
        <TiThMenu size={24}/>
      </div>
     <div className='navbar-buttons'>
      <ButtonsButton/>
     <ColorButton/>
     <CardsButton/>

     </div>
     <div className={`dialog ${dialogOpen ? 'dialog-open' : 'dialog-closed'}`}> {/* Step 3: CSS transitions */}
        <div className='close-button' onClick={toggleDialog}>
          <IoIosCloseCircleOutline size={24}/>
        </div>
      <div>
      <ButtonsButton/>
     <ColorButton/>
     <CardsButton/>
      </div>
        {/* Content of the dialog */}
        
      </div>
    </div>
  )
}

export default Navbar
