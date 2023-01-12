import './chocolates.styles.scss'

import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from '../../contexts/products.context';

import { useContext } from 'react';


const Chocolates = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div className='products-container'>

            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))
            }

        </div>
    )

}

export default Chocolates;