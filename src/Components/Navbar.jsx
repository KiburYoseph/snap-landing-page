import '../Components/Navbar.css';
import logo from '../assets/logo.svg'
import todoIcon from '../assets/icon-todo.svg'
import calendarIcon from '../assets/icon-calendar.svg'
import reminderIcon from '../assets/icon-reminders.svg'
import planningIcon from '../assets/icon-planning.svg'
import menuIcon from '../assets/icon-menu.svg'
import closeMenuIcon from '../assets/icon-close-menu.svg'



import { useState, useEffect, useRef } from 'react'



const Navbar = () => {

    const [features, setFeatures] = useState(false)
    const [company, setCompany] = useState(false)
    const [featuresMobile, setFeaturesMobile] = useState(false)
    const [companyMobile, setCompanyMobile] = useState(false)

    const [menuState, setMenuState] = useState(false)

    const featuresRef = useRef(null)
    const companyRef = useRef(null)

    const handleMenu = () => {
        setMenuState(!menuState)
    }
    
    
    useEffect(() => {
        function handleClickOutside(event) {
          if (featuresRef.current &&
            !featuresRef.current.contains(event.target) &&
            companyRef.current &&
            !companyRef.current.contains(event.target)) {
            setFeatures(false);
            setCompany(false);
            setMenuState(false)
          }
        }
    
        window.addEventListener('click', handleClickOutside);
        return () => {
        window.removeEventListener('click', handleClickOutside);
        };
      }, [featuresRef, companyRef, menuState]);



    return (
        <nav className='navBar'>
            <img src={logo} className='navLogo'/>
            <ul>
                <li onClick={() => setFeatures(!features)} className={`rotate${features}`}>Features <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>      
                
                {features ? 
                
                <div ref={featuresRef} className='dropDown FeaturesDD'>
                        <ul className='DDList'>
                            <li><img className='DDIcons' src={todoIcon} />Todo List</li>
                            <li><img className='DDIcons' src={calendarIcon} />Calendar</li>
                            <li><img className='DDIcons' src={reminderIcon} />Reminders</li>
                            <li><img className='DDIcons' src={planningIcon} />Planning</li>
                        </ul>
                    </div>
                    : null
                }
                    
                              
                </li>
                <li onClick={() => setCompany(!company)} className={`rotate${company}`}>Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
                    
                {company ? 
                
                <div ref={companyRef} className='dropDown FeaturesDD'>
                    <ul className='DDList'>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>
                </div>
                    : null
                }
             
                </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <div className='sideBtns'>
                <button className='loginBtn'>Login</button>
                <button className='registerBtn'>Register</button>
            </div>

            <button className='hamburgerButton' onClick={() => handleMenu()}><img src={menuIcon}/></button>

            {menuState ? 
            <ul className='hamburgerContainer'>
            <li className='closeIcon' onClick={() => handleMenu()}><img src={closeMenuIcon}/></li>
            <li onClick={() => setFeaturesMobile(!featuresMobile)} className={`rotate${featuresMobile}`}>Features <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>                        </li>  
                
                {featuresMobile ? 
                
                        <ul className='DDList'>
                            <li><img className='DDIcons' src={todoIcon} />Todo List</li>
                            <li><img className='DDIcons' src={calendarIcon} />Calendar</li>
                            <li><img className='DDIcons' src={reminderIcon} />Reminders</li>
                            <li><img className='DDIcons' src={planningIcon} />Planning</li>
                        </ul>
                    : null
                }
                    
                            

                <li onClick={() => setCompanyMobile(!companyMobile)} className={`rotate${companyMobile}`}>Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>                    </li>
                    
                {companyMobile ? 
                
                    <ul className='DDList'>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>
                    : null
                }
            

            <li>Careers</li>
            <li>About</li>
            <li className='centerButton'><button className='loginBtn'>Login</button></li>
            <li className='centerButton'><button className='registerBtn'>Register</button></li>
        </ul>
        
        : null}

            

        </nav>
    )
}

export default Navbar;