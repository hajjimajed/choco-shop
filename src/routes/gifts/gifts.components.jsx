import './gifts.styles.scss'

import { Route, Routes } from 'react-router-dom';

import GiftsPreview from '../gifts-preview/gifts-preview.component';

import GiftsCategory from '../gifts-category/gifts-category.component';




const Gifts = () => {

    return (
        <Routes>
            <Route index element={<GiftsPreview />}></Route>
            <Route path=':giftsCategory' element={<GiftsCategory />} ></Route>
        </Routes>
    )


}

export default Gifts;