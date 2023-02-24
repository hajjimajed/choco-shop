import './chocolate-bars.styles.scss'

import { useContext, useState, useEffect } from 'react';
import { ChocolatesContext } from '../../contexts/chocolates.context'

import ProductCard from '../product-card/product-card.component';

const ChocolateBars = () => {

    const { chocolatesMap } = useContext(ChocolatesContext);

    const [products, setProducts] = useState(chocolatesMap['chocolate bags']);

    useEffect(() => {
        setProducts(chocolatesMap['chocolate bags'])
    }, [chocolatesMap])

    return (
        <div className='chocolate-bars-container'>
            <div className='top-melted'>
                <img src="https://cdn.shopify.com/s/files/1/0029/2015/3137/t/30/assets/bars-bg-6611.png" alt="" />
            </div>

            <h1 className='title'>our chocolate bags</h1>

            <div className='preview'>



                {products &&
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) =>
                            <ProductCard key={product.id} product={product} />)
                }

            </div>
        </div>
    )
}

export default ChocolateBars;