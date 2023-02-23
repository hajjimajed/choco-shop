import './checkout.styles.scss'

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Button from '../../components/button/button.component';
import Footer from '../../components/footer/footer.component'

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate('/payment')

    return (

        <>

            <div className='checkout-page-header'>
                <div className='section-one'></div>
                <div className='section-two'>
                    <img src="https://i.ibb.co/QmCH5t0/melted-brown.png" alt="" />
                </div>
            </div>

            <div className='checkout-container'>

                <div className='checkout-header'>
                    <h1>checkout</h1>
                </div>
                <div className='line'></div>
                {
                    cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))
                }

                <span className='total'>Total: ${cartTotal}</span>
                <div className='button-container'>
                    <Button buttonType='cart' onClick={onNavigateHandler}>Payment</Button>
                </div>
            </div>

            <Footer />

        </>
    )

}

export default Checkout;