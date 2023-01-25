import './gifts.styles.scss'

import { Route, Routes } from 'react-router-dom';

import GiftsPreview from '../gifts-preview/gifts-preview.component';

import GiftsCategory from '../gifts-category/gifts-category.component';

import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { fetchGiftsAsync } from '../../store/gifts/gifts.action';

const Gifts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGiftsAsync());
    }, [])

    return (
        <Routes>
            <Route index element={<GiftsPreview />}></Route>
            <Route path=':giftsCategory' element={<GiftsCategory />} ></Route>
        </Routes>
    )


}

export default Gifts;