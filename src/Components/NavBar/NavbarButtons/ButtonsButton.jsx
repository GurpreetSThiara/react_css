import { useNavigate } from 'react-router-dom';
import './NavbarButtons.css';


const ButtonsButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/buttons')
    }
  return (
    <div className='navbar-button' onClick={handleClick}>
      Buttons
    </div>
  )
}

export default ButtonsButton
