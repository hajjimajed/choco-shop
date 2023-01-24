import './product-card.styles.scss'

import Button from '../button/button.component';

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';


const ProductCard = ({ product }) => {

    const { name, price, imageUrl, route } = product;

    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(`/${route}`)

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));



    return (


        <div className='product-card-container'>

            <img src={imageUrl} alt={name} />

            <div className='footer'>
                <span className='name' onClick={onNavigateHandler} >{name}</span>
                <span className='price'>$ {price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>ADD TO CART</Button>



        </div>

    )

}

export default ProductCard;