import './chocolates.styles.scss'

import ChocolatesPreview from '../chocolates-preview/chocolates-preview.component';

import { Route, Routes } from 'react-router-dom';

import ChocolatesCategory from '../chocolates-category/chocolates-category.component';

import { useEffect } from 'react';

import { fetchChocolatesAsync } from '../../store/chocolates/chocolates.action';
import { useDispatch } from 'react-redux';

const Chocolates = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChocolatesAsync());
    }, [])

    return (


        <Routes>
            <Route index element={<ChocolatesPreview />}></Route>
            <Route path=':chocolatesCategory' element={<ChocolatesCategory />}></Route>


        </Routes>
    )

}

export default Chocolates;