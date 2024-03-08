import { useNavigate } from 'react-router-dom';
import './NavbarButtons.css';


const CardsButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cards')
    }
  return (
    <div className='navbar-button' onClick={handleClick}>
      Cards
    </div>
  )
}

export default CardsButton
