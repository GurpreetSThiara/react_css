import { useEffect, useState } from 'react'
import './Navbar.css'
import ButtonsButton from './NavbarButtons/ButtonsButton'
import CardsButton from './NavbarButtons/CardsButton'
import ColorButton from './NavbarButtons/ColorButton'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
     <div className='navbar-buttons'>
      <ButtonsButton/>
     <ColorButton/>
     <CardsButton/>

     </div>
    </div>
  )
}

export default Navbar
