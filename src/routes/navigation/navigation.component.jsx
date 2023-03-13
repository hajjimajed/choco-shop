import { Fragment, useState } from 'react';
import './navigation.styles.scss'

import { Outlet, Link } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { signOutUser } from '../../utils/firebase/firebase.utils';


import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';



const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

    const menuToggle = () => {
        setIsNavigationMenuOpen(!isNavigationMenuOpen);
        setIsButtonClicked(!isButtonClicked);
    }

    const handleMenuLink = () => {
        setIsNavigationMenuOpen(false);
        setIsButtonClicked(!isButtonClicked);
    };

    return (

        <Fragment>

            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img className='main-logo' src="https://i.ibb.co/gDQTwtR/chocos.png" alt="" />
                </Link>

                <div className='nav-container'>
                    <div className={`nav-links-container ${isNavigationMenuOpen ? 'visible' : ''}`}>
                        <Link onClick={handleMenuLink} className="nav-link" to='/chocolates'>
                            Chocolates
                        </Link>
                        <Link onClick={handleMenuLink} className="nav-link" to='/candys'>
                            Candys
                        </Link>
                        <Link onClick={handleMenuLink} className="nav-link" to='/gifts'>
                            Gifts
                        </Link>
                        {
                            currentUser ? (
                                <span className='nav-link nav-btn' onClick={() => { signOutUser(); handleMenuLink(); }}>Sign Out</span>)
                                : (<Link onClick={handleMenuLink} className="nav-link nav-btn" to='/auth'>
                                    Sign In
                                </Link>
                                )
                        }

                        <div className='social-icons'>
                            <Facebook onClick={handleMenuLink} className='icon' />
                            <Instagram onClick={handleMenuLink} className='icon' />
                            <Twitter onClick={handleMenuLink} className='icon' />
                        </div>

                    </div>
                    <CartIcon />

                    {isCartOpen && <CartDropdown />}

                    <div onClick={menuToggle} className={`ham-button ${isButtonClicked ? 'ham-button--active' : ''}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>



            </div>
            <Outlet />
        </Fragment>

    )

}

export default Navigation;