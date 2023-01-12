import './gifts.styles.scss'

import { useContext } from 'react';

import { GiftContext } from '../../contexts/gifts.context';

import ProductCard from '../../components/product-card/product-card.component';


const Gifts = () => {

    const { gifts } = useContext(GiftContext);

    return (
        <div className='products-container'>

            {

                gifts.map((gift) => (
                    <ProductCard key={gift.id} product={gift}></ProductCard>
                ))

            }

        </div>
    )

}

export default Gifts;