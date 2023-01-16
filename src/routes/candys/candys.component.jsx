import './candys.styles.scss'

import CandysPreview from '../candys-preview/candys-preview.component';

import CandysCategory from '../candys-category/candys-category.component';

import { Route, Routes } from 'react-router-dom';


const Candys = () => {


    return (

        <Routes>
            <Route index element={<CandysPreview />}></Route>
            <Route path=':candysCategory' element={<CandysCategory />} ></Route>
        </Routes>

    )

}

export default Candys;