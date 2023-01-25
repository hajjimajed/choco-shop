import './product-page.styles.scss'

import { useSelector } from 'react-redux';
import { selectChocolatesMap } from '../../store/chocolates/chocolates.selector';

import ProductPageView from '../../components/product-page-view/product-page-view.component';


const ProductPage = () => {

    const chocolatesMap = useSelector(selectChocolatesMap);

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