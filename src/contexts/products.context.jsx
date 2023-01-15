import { createContext, useState, useEffect } from "react";

/*
import CHOCOLATE_DATA from '../chocolate-data.js'

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
*/

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    PRODUCTS: []
})

export const ProductsProvider = ({ children }) => {


    const [products, setProducts] = useState([]);


    useEffect(() => {

        const getChocolatesMap = async () => {
            const chocolateMap = await getCategoriesAndDocuments('chocolates');

            console.log(chocolateMap);

        }

        getChocolatesMap()


    }, [])

    /*
    useEffect(() => {

        addCollectionAndDocuments('chocolates', CHOCOLATE_DATA);

    }, [])
*/

    const value = { products };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )


}