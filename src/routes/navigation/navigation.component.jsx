import { Fragment } from 'react';
import './navigation.styles.scss'

import { Outlet, Link } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { signOutUser } from '../../utils/firebase/firebase.utils';


import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';



const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);



    return (

        <Fragment>

            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>

                <div className='nav-links-container'>
                    <Link className="nav-link" to='/chocolates'>
                        Chocolates
                    </Link>
                    <Link className="nav-link" to='/candys'>
                        Candys
                    </Link>
                    <Link className="nav-link" to='/gifts'>
                        Gifts
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link nav-btn' onClick={signOutUser}>Sign Out</span>)
                            : (<Link className="nav-link nav-btn" to='/auth'>
                                Sign In
                            </Link>
                            )
                    }

                    <CartIcon />

                    {isCartOpen && <CartDropdown />}
                </div>




            </div>
            <Outlet />
        </Fragment>

    )

}

export default Navigation;