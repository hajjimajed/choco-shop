import './candys-category.styles.scss'

import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectCandysMap } from '../../store/candys/candys.selector';

import ProductCard from '../../components/product-card/product-card.component';

const CandysCategory = () => {

    const { candysCategory } = useParams();
    const candysMap = useSelector(selectCandysMap);

    const [products, setProducts] = useState(candysMap[candysCategory]);

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