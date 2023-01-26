import { Fragment } from "react";

import { useContext } from "react";
import { CandyContext } from "../../contexts/candys.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";


const CandysPreview = () => {

    const { candysMap } = useContext(CandyContext);

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