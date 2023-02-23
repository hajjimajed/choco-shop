import './candys-category.styles.scss'

import { useParams } from 'react-router-dom';

import { useEffect, useState, useContext } from 'react';

import { CandyContext } from '../../contexts/candys.context';

import ProductCard from '../../components/product-card/product-card.component';
import Footer from '../../components/footer/footer.component';

const CandysCategory = () => {

    const { candysCategory } = useParams();
    const { candysMap } = useContext(CandyContext);

    const [products, setProducts] = useState(candysMap[candysCategory]);

    useEffect(() => {

        setProducts(candysMap[candysCategory])

    }, [candysCategory, candysMap])


    return (
        <>
            <div className='candy-category-header'>
                <div className='section-one'></div>
                <div className='section-two'>
                    <img src="https://i.ibb.co/QmCH5t0/melted-brown.png" alt="" />
                </div>
            </div>
            <div className='chocolates-category-container'></div>
            <div className='candys-category-container'>
                <div className='candys-category-container-preview'>

                    {
                        products &&
                        products.map((product) => <ProductCard product={product} key={product.id} />)
                    }

                </div>
            </div>

            <Footer />
        </>
    )

}


export default CandysCategory;