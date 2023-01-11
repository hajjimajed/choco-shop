import { Fragment, useContext } from 'react';
import './navigation.styles.scss'

import { Outlet, Link } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import Button from '../../components/button/button.component';

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from '../../utils/firebase/firebase.utils';


const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null)
    }

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

                {
                    currentUser ? (
                        <span className='nav-link nav-btn' onClick={signOutHandler}>Sign Out</span>)
                        : (<Link className="nav-link nav-btn" to='/auth'>
                            Sign In
                        </Link>
                        )
                }




            </div>
            <Outlet />
        </Fragment>

    )

}

export default Navigation;