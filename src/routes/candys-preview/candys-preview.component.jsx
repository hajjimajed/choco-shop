import { Fragment } from "react";
import './candys-preview.styles.scss'
import Footer from "../../components/footer/footer.component";

import { useContext } from "react";
import { CandyContext } from "../../contexts/candys.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";


const CandysPreview = () => {

    const { candysMap } = useContext(CandyContext);



    return (
        <Fragment>

            <div className='candys-preview-header'>
                <div className='section-one'></div>
                <div className='section-two'>
                    <img src="https://i.ibb.co/ct6jtyw/melted-blue.png" alt="" />
                </div>
            </div>
            {
                Object.keys(candysMap).map(title => {
                    const products = candysMap[title];
                    return <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
                })
            }

            <Footer />
        </Fragment>
    )

}

export default CandysPreview;