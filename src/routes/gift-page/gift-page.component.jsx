import './gift-page.styles.scss'

import { useContext } from 'react';
import { GiftContext } from '../../contexts/gifts.context';

import ProductPageView from '../../components/product-page-view/product-page-view.component';


const GiftPage = () => {

    const { giftsMap } = useContext(GiftContext);

    const routeAdr = window.location.pathname.split("/").pop();


    return (
        <div>

            {
                Object.keys(giftsMap).map(title => {
                    const products = giftsMap[title];

                    return (
                        <div key={products}>
                            {

                                products &&
                                products.map((product) => {
                                    if (product.route == routeAdr) {
                                        return <ProductPageView key={product.id} product={product}></ProductPageView>
                                    }
                                })

                            }
                        </div>

                    )
                })
            }

        </div>
    )


}

export default GiftPage;