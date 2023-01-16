import './candys-category.styles.scss'

import { useParams } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import { CandyContext } from '../../contexts/candys.context';

import ProductCard from '../../components/product-card/product-card.component';

const CandysCategory = () => {

    const { candysCategory } = useParams();
    const { candysMap } = useContext(CandyContext)

    const [products, setProducts] = useState(candysMap[candysCategory])

    useEffect(() => {

        setProducts(candysMap[candysCategory])

    }, [candysCategory, candysMap])


    return (

        <div className='candys-category-container'>

            {
                products &&
                products.map((product) => <ProductCard product={product} key={product.id} />)
            }

        </div>

    )

}


export default CandysCategory;