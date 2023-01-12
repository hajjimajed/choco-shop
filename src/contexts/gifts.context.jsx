import { createContext, useState } from "react";

import GIFTS from '../gift-data.json'


export const GiftContext = createContext({
    GIFTS: []
})


export const GiftProvider = ({ children }) => {

    const [gifts] = useState(GIFTS);
    const value = { gifts }

    return (
        <GiftContext.Provider value={value}>
            {children}
        </GiftContext.Provider>
    )

}