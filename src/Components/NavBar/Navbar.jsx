import './Navbar.css'
import ButtonsButton from './NavbarButtons/ButtonsButton'
import CardsButton from './NavbarButtons/CardsButton'
import ColorButton from './NavbarButtons/ColorButton'

const Navbar = () => {
  return (
    <div className='navbar'>
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
