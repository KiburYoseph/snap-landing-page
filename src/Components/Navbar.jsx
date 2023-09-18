import '../Components/Navbar.css';
import logo from '../assets/logo.svg'
import arrowUp from '../assets/icon-arrow-up.svg'
import arrowDown from '../assets/icon-arrow-down.svg'

const Navbar = () => {
    return (
        <nav className='navBar'>
            <img src={logo} className='navLogo'/>
            <ul>
                <li>Features <img src={arrowDown} /></li>
                <li>Company <img src={arrowDown} /></li>
                <li>Careers <img src={arrowDown} /></li>
                <li>About</li>
            </ul>
            <div className='sideBtns'>
                <button className='loginBtn'>Login</button>
                <button className='registerBtn'>Register</button>
            </div>
        </nav>
    )
}

export default Navbar;