import { useContext, Fragment } from "react";
import './gifts-preview.styles.scss'
import Footer from "../../components/footer/footer.component";

import { GiftContext } from "../../contexts/gifts.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const GiftsPreview = () => {

    const { giftsMap } = useContext(GiftContext);

    return (
        <Fragment>

            <div className='gifts-preview-header'>
                <div className='section-one'></div>
                <div className='section-two'>
                    <img src="https://i.ibb.co/LJ42BMg/melted-pink.png" alt="" />
                </div>
            </div>
            {
                Object.keys(giftsMap).map(title => {
                    const products = giftsMap[title];

                    return <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
                })
            }

            <Footer />
        </Fragment>
    )



}

export default GiftsPreview;