import { Fragment } from "react";

import { useSelector } from "react-redux";
import { selectCandysMap } from "../../store/candys/candys.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";


const CandysPreview = () => {

    const candysMap = useSelector(selectCandysMap);

    return (
        <Fragment>
            {
                Object.keys(candysMap).map(title => {
                    const products = candysMap[title];
                    return <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
                })
            }
        </Fragment>
    )

}

export default CandysPreview;