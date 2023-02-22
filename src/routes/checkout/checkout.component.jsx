import './checkout.styles.scss'

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Button from '../../components/button/button.component';

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate('/payment')

    return (
        <div className='checkout-container'>

            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }

            <span className='total'>Total: ${cartTotal}</span>

            <Button onClick={onNavigateHandler}>Payment</Button>

        </div>
    )

}

export default Checkout;