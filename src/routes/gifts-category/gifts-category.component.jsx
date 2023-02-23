import './gifts-category.styles.scss'

import { useParams } from 'react-router-dom';

import { GiftContext } from '../../contexts/gifts.context';

import { useEffect, useState, useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import Footer from '../../components/footer/footer.component';

const GiftsCategory = () => {

    const { giftsCategory } = useParams();
    const { giftsMap } = useContext(GiftContext);

    const [products, setProducts] = useState(giftsMap[giftsCategory])

    useEffect(() => {
        setProducts(giftsMap[giftsCategory])
    }, [giftsMap, giftsCategory])

    return (
        <>
            <div className='gift-category-header'>
                <div className='section-one'></div>
                <div className='section-two'>
                    <img src="https://i.ibb.co/QmCH5t0/melted-brown.png" alt="" />
                </div>
            </div>
            <div className='gifts-category-container'>
                <div className='gifts-category-container-preview'>
                    {
                        products &&
                        products.map((product) => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </div>

            <Footer />

        </>
    )

}

export default GiftsCategory;