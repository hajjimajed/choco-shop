import { useContext, Fragment } from "react";

import { GiftContext } from "../../contexts/gifts.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const GiftsPreview = () => {

    const { giftsMap } = useContext(GiftContext);

    return (
        <Fragment>
            {
                Object.keys(giftsMap).map(title => {
                    const products = giftsMap[title];

                    return <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
                })
            }
        </Fragment>
    )



}

export default GiftsPreview;