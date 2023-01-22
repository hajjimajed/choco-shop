import './product-card.styles.scss'

import Button from '../button/button.component';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { Link, useNavigate } from "react-router-dom";





const ProductCard = ({ product }) => {

    const { name, price, imageUrl, route } = product;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(`/${route}`)

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);



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