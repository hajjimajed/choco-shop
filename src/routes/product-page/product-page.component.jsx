import './product-page.styles.scss'

import { useParams } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import { ChocolatesContext } from '../../contexts/chocolates.context';

import ProductPageView from '../../components/product-page-view/product-page-view.component';

const ProductPage = () => {

    const { chocolatesCategory } = useParams()
    const { chocolatesMap } = useContext(ChocolatesContext)

    const [products, setProducts] = useState(chocolatesMap[chocolatesCategory])

    useEffect(() => {
        setProducts(chocolatesMap[chocolatesCategory])
    }, [chocolatesCategory, chocolatesMap])






    const routeAdr = window.location.pathname.split("/").pop();



    return (
        <div>

            {
                products &&
                products.map((product) => {

                    if (product.route == routeAdr) {
                        return <ProductPageView key={product.id} product={product}></ProductPageView>
                    }
                })
            }

            <h2></h2>


        </div>
    )

}

export default ProductPage;