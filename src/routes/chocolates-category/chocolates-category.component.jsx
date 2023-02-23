import './chocolates-category.styles.scss'

import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import Footer from '../../components/footer/footer.component';

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
        <>
            <div className='chocolate-category-header'>
                <div className='section-one'></div>
                <div className='section-two'>
                    <img src="https://i.ibb.co/QmCH5t0/melted-brown.png" alt="" />
                </div>
            </div>
            <div className='chocolates-category-container'>
                <div className='chocolates-category-container-preview'>
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

export default ChocolatesCategory;