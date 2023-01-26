import './gifts-category.styles.scss'

import { useParams } from 'react-router-dom';

import { GiftContext } from '../../contexts/gifts.context';

import { useEffect, useState, useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

const GiftsCategory = () => {

    const { giftsCategory } = useParams();
    const { giftsMap } = useContext(GiftContext);

    const [products, setProducts] = useState(giftsMap[giftsCategory])

    useEffect(() => {
        setProducts(giftsMap[giftsCategory])
    }, [giftsMap, giftsCategory])

    return (
        <div className='gifts-category-container'>
            {
                products &&
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
    )

}

export default GiftsCategory;