import './product-page-view.styles.scss'
import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg'

import { useState } from 'react';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button from '../button/button.component';
import Footer from '../footer/footer.component'

import { useSelector, useDispatch } from 'react-redux';


const images = [
    'https://i.ibb.co/t3JzxfC/pngwing-com-1.png',
    'https://i.ibb.co/t3JzxfC/pngwing-com-1.png',
    'https://i.ibb.co/t3JzxfC/pngwing-com-1.png',
];

const ProductPageView = ({ product }) => {

    const { name, price } = product;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));


    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setActiveIndex((activeIndex + 1) % images.length);
    };


    return (
        <>

            <div className='product-page-header'>
                <div className='section-one'></div>
                <div className='section-two'>
                    <img src="https://i.ibb.co/QmCH5t0/melted-brown.png" alt="" />
                </div>
            </div>

            <div className='product-page-view-container'>

                <div className='product-carousel'>

                    <div className="carousel-container">
                        <div className="carousel">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
                                >
                                    <img className='carousel-image' src={image} alt="" />
                                </div>
                            ))}

                            <LeftArrow className="carousel-prev" onClick={handlePrevClick} />
                            <RightArrow className="carousel-next" onClick={handleNextClick} />
                        </div>
                        <div className="carousel-paging">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-page ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <img src={image} alt={`Image ${index}`} />
                                </div>

                            ))}
                        </div>
                    </div>

                </div>

                <div className='product-infos'>

                    <h1>{name}</h1>
                    <h2>${price}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa, libero deleniti asperiores consequuntur commodi, et explicabo quam ratione voluptatibus ipsum, voluptate enim magnam suscipit quae veniam aliquid magni id!</p>
                    <div>
                        <Button buttonType='product'>add to cart</Button>
                    </div>
                    <h3>Try it risk-free, money back guaranteed</h3>

                </div>

            </div>

            <Footer />

        </>
    )

}

export default ProductPageView;