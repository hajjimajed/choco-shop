import './product-page-view.styles.scss'

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

const ProductPageView = ({ product }) => {

    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);



    return (
        <div className='product-page-view-container'>

            <img src={imageUrl} alt="" />

            <div className='product-page-view-infos'>

                <h1>{name}</h1>
                <h2>${price}</h2>
                <Button buttonType='inverted' onClick={addProductToCart}>ADD TO CART</Button>
                <h3>FREE DELIVERY FOR ORDERS OVER 60€ EUROS</h3>

            </div>

        </div>
    )

}

export default ProductPageView;