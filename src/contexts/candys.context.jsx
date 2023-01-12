import { createContext, useState } from "react";

import CANDYS from '../candy-data.json'


export const CandyContext = createContext({
    CANDYS: []
})

export const CandyProvider = ({ children }) => {
    const [candys] = useState(CANDYS)
    const value = { candys }

    return (
        <CandyContext.Provider value={value}>
            {children}
        </CandyContext.Provider>
    )
}