import './candys.styles.scss'

import { Outlet } from "react-router-dom";



const Candys = () => {

    return (
        <div>
            <Outlet />

            <h1>I'm the candys pages</h1>
        </div>
    )

}

export default Candys;