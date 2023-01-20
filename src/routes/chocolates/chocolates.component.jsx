import './chocolates.styles.scss'

import ChocolatesPreview from '../chocolates-preview/chocolates-preview.component';

import { Route, Routes } from 'react-router-dom';

import ChocolatesCategory from '../chocolates-category/chocolates-category.component';

import ProductPage from '../product-page/product-page.component';



const Chocolates = () => {



    return (


        <Routes>
            <Route index element={<ChocolatesPreview />}></Route>
            <Route path=':chocolatesCategory' element={<ChocolatesCategory />}></Route>
            <Route path=':chocolatesCategory/*' element={<ProductPage />}></Route>


        </Routes>
    )

}

export default Chocolates;