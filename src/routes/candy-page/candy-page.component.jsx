import './candy-page.styles.scss'

import { useSelector } from 'react-redux';
import { selectCandysMap } from '../../store/candys/candys.selector';

import ProductPageView from '../../components/product-page-view/product-page-view.component';


const CandyPage = () => {

    const candysMap = useSelector(selectCandysMap);

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