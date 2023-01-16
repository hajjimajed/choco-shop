import { Fragment, useContext } from 'react';
import './navigation.styles.scss'

import { Outlet, Link } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import Button from '../../components/button/button.component';

import { UserContext } from "../../contexts/user.context";

import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';


const Navigation = () => {

    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext);



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
                </div>

                <div className='nav-icons'>

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