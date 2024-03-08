import { useNavigate } from 'react-router-dom';
import './NavbarButtons.css';


const ColorButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/colors')
    }
  return (
    <div className='navbar-button' onClick={handleClick}>
      Colors
    </div>
  )
}

export default ColorButton
