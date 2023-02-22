import './footer.styles.scss'

import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-info'>
                <div className='footer-menu'>
                    <h1 className='footer-title'>menu</h1>
                    <Link className='footer-link' to='/'><h2>chocolates</h2></Link>
                    <Link className='footer-link' to='/'><h2>candys</h2></Link>
                    <Link className='footer-link' to='/'><h2>gifts</h2></Link>
                </div>
                <div className='footer-menu'>
                    <h1 className='footer-title'>join our community</h1>
                    <h2>Get the latest scoop on new flavours, products,</h2>
                    <h2>special offers, recipes and more. Subscribe now</h2>
                    <h2>for 10% off on your first order!</h2>
                </div>
                <div className='footer-menu'>
                    <h1 className='footer-title'>follow us</h1>
                    <div className='social-media'>
                        <Facebook className='icon' />
                        <Instagram className='icon' />
                        <Twitter className='icon' />
                    </div>
                </div>
            </div>
            <div className='line'></div>
            <div className='footer-about'>
                <h1>© 2023, Choco Shop | All rights reserved</h1>
            </div>
        </div>
    )
}

export default Footer;