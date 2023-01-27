import './product-card.styles.scss'

import Button from '../button/button.component';

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';


const ProductCard = ({ product }) => {

    const { name, price, imageUrl, route } = product;

    const navigate = useNavigate();
    const onNavigateHandler = () => {
        const firstTwoChars = route.slice(0, 2);
        if (firstTwoChars === 'cn') {
            navigate(`/candy-product/${route}`)
        }
        else if (firstTwoChars === 'gf') {
            navigate(`/gift-product/${route}`)
        }
        else {
            navigate(`/chocolate-product/${route}`)
        }

    }

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));



    return (


        <div className='product-card-container'>

            <img src={imageUrl} alt={name} />
            <div className='add'>
                <Button id='btn1' buttonType='add2' onClick={addProductToCart}>+ Add</Button>
                <Button id='btn1' buttonType='add' onClick={onNavigateHandler}>Details</Button>
            </div>
            <div className='footer'>
                <span className='price'>${price}</span>
                <span className='name' onClick={onNavigateHandler} >{name}</span>
            </div>



        </div>

    )

}

export default ProductCard;