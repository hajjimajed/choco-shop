import './cart-dropdown.styles.scss'

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal, selectCartCount } from '../../store/cart/cart.selector';


import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const cartCount = useSelector(selectCartCount);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }




    return (
        <>


            <div className='cart-dropdown-container'>
                <div className='cart-header'>
                    <div className='cart-dropdown-logo'>
                        <ShoppingBag className='shopping-icon'></ShoppingBag>
                        <span className='item-count'>{cartCount}</span>
                    </div>
                    <div className='cart-total'>
                        <span>total:</span>
                        <span className='total-price'>${cartTotal}</span>
                    </div>
                </div>
                <div className='cart-items'>
                    {
                        cartItems.map(cartItem => <CartItem key={cartItem.name} cartItem={cartItem} />)
                    }
                </div>
                <Button buttonType='cart' onClick={goToCheckoutHandler}>chekout</Button>
            </div>
        </>
    )

}

export default CartDropdown;