import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);
    const menuImage = <img src="/images/menubar.png" style={{height: 32, width: 32}}/>;
    const activeMenuImage = <img src="/images/close.png" style={{height: 32, width: 32}}/>;

    const showButton = () => {
        if(window.innerWidth<=960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick= {closeMobileMenu}>Demo Website</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <div className="ActionDiv">{click ? activeMenuImage : menuImage }</div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/getstarted' className='nav-links' onClick= {closeMobileMenu}>
                            Get Started
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/verifiedcoins' className='nav-links' onClick= {closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/support' className='nav-links' onClick= {closeMobileMenu}>
                            Support
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signin' className='nav-links-mobile' onClick= {closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign In</Button>}
            </div>
        </nav>
        </>
    )
}

export default NavBar
