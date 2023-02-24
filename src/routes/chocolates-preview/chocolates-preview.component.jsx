import './chocolates.preview.styles.scss'
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { ReactComponent as Melted } from '../../assets/melted.svg'
import Footer from '../../components/footer/footer.component';

import { Fragment } from 'react';

import { useContext } from 'react';
import { ChocolatesContext } from '../../contexts/chocolates.context';

const ChocolatesPreview = () => {

    const { chocolatesMap } = useContext(ChocolatesContext);

    return (
        <Fragment>

            <div className='chocolates-preview-header'>
                <div className='section-one'></div>
                <div className='section-two'>
                    <img src="https://i.ibb.co/ZdVwvGV/melted-1.png" alt="" />
                </div>
            </div>

            {
                Object.keys(chocolatesMap).map(title => {
                    const products = chocolatesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} ></CategoryPreview>
                })
            }

            <Footer />


        </Fragment>
    )

}

export default ChocolatesPreview;