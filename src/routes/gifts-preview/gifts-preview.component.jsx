import { useContext, Fragment } from "react";

import { selectGiftsMap } from "../../store/gifts/gifts.selector";

import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const GiftsPreview = () => {

    const giftsMap = useSelector(selectGiftsMap);

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