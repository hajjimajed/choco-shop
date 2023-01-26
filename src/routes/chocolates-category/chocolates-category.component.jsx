import './chocolates-category.styles.scss'

import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { useContext } from 'react';
import { ChocolatesContext } from '../../contexts/chocolates.context';

const ChocolatesCategory = () => {

    const { chocolatesCategory } = useParams();
    const { chocolatesMap } = useContext(ChocolatesContext);

    const [products, setProducts] = useState(chocolatesMap[chocolatesCategory]);

    useEffect(() => {
        setProducts(chocolatesMap[chocolatesCategory])
    }, [chocolatesCategory, chocolatesMap])

    return (


        <div className='chocolates-category-container'>

            {
                products &&
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }

        </div>

    )

}

export default ChocolatesCategory;