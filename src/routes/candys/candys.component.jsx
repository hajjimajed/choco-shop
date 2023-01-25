import './candys.styles.scss'

import CandysPreview from '../candys-preview/candys-preview.component';

import CandysCategory from '../candys-category/candys-category.component';

import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { fetchCandysAsync } from '../../store/candys/candys.action';


const Candys = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCandysAsync());
    }, [])

    return (

        <Routes>
            <Route index element={<CandysPreview />}></Route>
            <Route path=':candysCategory' element={<CandysCategory />} ></Route>
        </Routes>

    )

}

export default Candys;