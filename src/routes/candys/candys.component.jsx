import './candys.styles.scss'


import { useContext } from 'react';

import { CandyContext } from '../../contexts/candys.context';

import ProductCard from '../../components/product-card/product-card.component';


const Candys = () => {

    const { candys } = useContext(CandyContext)

    return (
        <div className='products-container'>

            {
                candys.map((candy) => (
                    <ProductCard key={candy.id} product={candy}></ProductCard>
                ))
            }

        </div>
    )

}

export default Candys;