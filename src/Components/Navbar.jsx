import '../Components/Navbar.css';
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <nav className='navBar'>
            <img src={logo} className='navLogo'/>
            <ul>
                <li>Features <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg></li>
                <li>Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg></li>
                <li>Careers <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg></li>
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