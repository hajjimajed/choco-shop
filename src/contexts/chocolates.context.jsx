import { createContext, useState, useEffect } from "react";

/*
import CHOCOLATE_DATA from '../chocolate-data.js'

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
*/

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ChocolatesContext = createContext({
    chocolatesMap: {}
})

export const ChocolatesProvider = ({ children }) => {


    const [chocolatesMap, setChocolatesMap] = useState({});


    useEffect(() => {

        const getChocolatesMap = async () => {
            const chocolateMap = await getCategoriesAndDocuments('chocolates');


            setChocolatesMap(chocolateMap);

        }

        getChocolatesMap()


    }, [])

    /*
    useEffect(() => {

        addCollectionAndDocuments('chocolates', CHOCOLATE_DATA);

    }, [])
*/

    const value = { chocolatesMap };

    return (
        <ChocolatesContext.Provider value={value}>
            {children}
        </ChocolatesContext.Provider>
    )


}