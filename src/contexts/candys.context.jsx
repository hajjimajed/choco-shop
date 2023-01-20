import { createContext, useState, useEffect } from "react";


import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const CandyContext = createContext({
    candysMap: {}
})



export const CandyProvider = ({ children }) => {

    const [candysMap, setCandysMap] = useState({})

    useEffect(() => {

        const getCandysMap = async () => {
            const candyMap = await getCategoriesAndDocuments('candys')


            setCandysMap(candyMap)
        }

        getCandysMap();

    }, [])



    const value = { candysMap }


    return (
        <CandyContext.Provider value={value} >
            {children}
        </CandyContext.Provider>
    )
}