
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { Fragment } from 'react';

import { useSelector } from 'react-redux';
import { selectChocolatesMap } from '../../store/chocolates/chocolates.selector';


const ChocolatesPreview = () => {

    const chocolatesMap = useSelector(selectChocolatesMap);

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