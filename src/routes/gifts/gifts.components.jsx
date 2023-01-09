import './gifts.styles.scss'

import { Outlet } from "react-router-dom";



const Gifts = () => {

    return (
        <div>
            <Outlet />

            <h1>I'm the gifts pages</h1>
        </div>
    )

}

export default Gifts;