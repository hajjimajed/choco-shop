import './chocolates.styles.scss'

import { Outlet } from "react-router-dom";



const Chocolates = () => {

    return (
        <div>
            <Outlet />

            <h1>I'm the chocolates pages</h1>
        </div>
    )

}

export default Chocolates;