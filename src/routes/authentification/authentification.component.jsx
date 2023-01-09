import './authentification.styles.scss'

import { Outlet } from "react-router-dom";



const Authentification = () => {

    return (
        <div>
            <Outlet />

            <h1>sign in and sign up page</h1>
        </div>
    )

}

export default Authentification;