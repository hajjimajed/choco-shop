
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { ChocolatesContext } from '../../contexts/chocolates.context';

import { Fragment, useContext } from 'react';




const ChocolatesPreview = () => {

    const { chocolatesMap } = useContext(ChocolatesContext);

    return (
        <Fragment>

            {
                Object.keys(chocolatesMap).map(title => {
                    const products = chocolatesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} ></CategoryPreview>
                })
            }



        </Fragment>
    )

}

export default ChocolatesPreview;