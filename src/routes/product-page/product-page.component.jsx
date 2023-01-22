import './product-page.styles.scss'

import { ChocolatesContext } from '../../contexts/chocolates.context';

import { useContext } from 'react';

import ProductPageView from '../../components/product-page-view/product-page-view.component';


const ProductPage = () => {

    const { chocolatesMap } = useContext(ChocolatesContext);

    const routeAdr = window.location.pathname.split("/").pop();


    return (
        <div>

            {
                Object.keys(chocolatesMap).map(title => {
                    const products = chocolatesMap[title];

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

export default ProductPage;