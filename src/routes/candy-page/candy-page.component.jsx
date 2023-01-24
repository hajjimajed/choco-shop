import './candy-page.styles.scss'

import { CandyContext } from '../../contexts/candys.context';

import { useContext } from 'react';

import ProductPageView from '../../components/product-page-view/product-page-view.component';


const CandyPage = () => {

    const { candysMap } = useContext(CandyContext);

    const routeAdr = window.location.pathname.split("/").pop();


    return (
        <div>

            {
                Object.keys(candysMap).map(title => {
                    const products = candysMap[title];

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

export default CandyPage;